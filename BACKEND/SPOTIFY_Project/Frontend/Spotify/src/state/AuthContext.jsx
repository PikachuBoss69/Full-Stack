import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { api } from '../utils/api.js'

const AuthContext = createContext(null)

const STORAGE_KEY = 'spotify_project_user'

function readStoredUser() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(readStoredUser)
  const [loading, setLoading] = useState(false)

  const setAndPersistUser = useCallback((nextUser) => {
    setUser(nextUser)
    if (!nextUser) localStorage.removeItem(STORAGE_KEY)
    else localStorage.setItem(STORAGE_KEY, JSON.stringify(nextUser))
  }, [])

  const register = useCallback(async ({ username, email, password, role }) => {
    setLoading(true)
    try {
      const data = await api.post('/api/auth/register', { username, email, password, role })
      setAndPersistUser(data.user)
      return data
    } finally {
      setLoading(false)
    }
  }, [setAndPersistUser])

  const login = useCallback(async ({ username, email, password }) => {
    setLoading(true)
    try {
      const data = await api.post('/api/auth/logIn', { username, email, password })
      setAndPersistUser(data.user)
      return data
    } finally {
      setLoading(false)
    }
  }, [setAndPersistUser])

  const logout = useCallback(async () => {
    setLoading(true)
    try {
      await api.post('/api/auth/logOut', {})
    } finally {
      setAndPersistUser(null)
      setLoading(false)
    }
  }, [setAndPersistUser])

  const value = useMemo(
    () => ({ user, loading, register, login, logout, setUser: setAndPersistUser }),
    [user, loading, register, login, logout, setAndPersistUser],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}


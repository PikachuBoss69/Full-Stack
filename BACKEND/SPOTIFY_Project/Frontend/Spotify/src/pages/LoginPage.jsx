import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../state/AuthContext.jsx'

export function LoginPage() {
  const { login, loading } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ username: '', email: '', password: '' })
  const [error, setError] = useState('')

  return (
    <section className="stack">
      <div className="page-head">
        <div>
          <h1>Log in</h1>
          <p className="muted">
            Calls <code>POST /api/auth/logIn</code> and stores the returned user while the backend
            keeps the session in a cookie.
          </p>
        </div>
      </div>

      <div className="card stack">
        {error ? <div className="alert error">{error}</div> : null}
        <form
          className="stack"
          onSubmit={async (e) => {
            e.preventDefault()
            setError('')
            try {
              await login({
                username: form.username || undefined,
                email: form.email || undefined,
                password: form.password,
              })
              navigate('/')
            } catch (err) {
              setError(err.message || 'Login failed')
            }
          }}
        >
          <div className="row">
            <div className="field">
              <label className="label">Username (or use email)</label>
              <input
                className="input"
                value={form.username}
                onChange={(e) => setForm((s) => ({ ...s, username: e.target.value }))}
                placeholder="e.g. negis"
                autoComplete="username"
              />
            </div>
            <div className="field">
              <label className="label">Email (or use username)</label>
              <input
                className="input"
                value={form.email}
                onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Password</label>
            <input
              className="input"
              type="password"
              value={form.password}
              onChange={(e) => setForm((s) => ({ ...s, password: e.target.value }))}
              autoComplete="current-password"
              required
            />
          </div>

          <div className="row">
            <button className="btn" type="submit" disabled={loading}>
              {loading ? 'Logging in…' : 'Log in'}
            </button>
            <button
              className="btn secondary"
              type="button"
              onClick={() => setForm({ username: '', email: '', password: '' })}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}


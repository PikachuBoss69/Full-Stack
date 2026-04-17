import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../state/AuthContext.jsx'

export function RegisterPage() {
  const { register, loading } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ username: '', email: '', password: '', role: 'user' })
  const [error, setError] = useState('')

  return (
    <section className="stack">
      <div className="page-head">
        <div>
          <h1>Register</h1>
          <p className="muted">
            Calls <code>POST /api/auth/register</code>. Pick <code>artist</code> if you want to
            upload songs.
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
              await register(form)
              navigate('/')
            } catch (err) {
              setError(err.message || 'Registration failed')
            }
          }}
        >
          <div className="row">
            <div className="field">
              <label className="label">Username</label>
              <input
                className="input"
                value={form.username}
                onChange={(e) => setForm((s) => ({ ...s, username: e.target.value }))}
                required
                autoComplete="username"
              />
            </div>
            <div className="field">
              <label className="label">Email</label>
              <input
                className="input"
                type="email"
                value={form.email}
                onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                required
                autoComplete="email"
              />
            </div>
          </div>

          <div className="row">
            <div className="field">
              <label className="label">Password</label>
              <input
                className="input"
                type="password"
                value={form.password}
                onChange={(e) => setForm((s) => ({ ...s, password: e.target.value }))}
                required
                autoComplete="new-password"
              />
            </div>
            <div className="field">
              <label className="label">Role</label>
              <select
                className="input"
                value={form.role}
                onChange={(e) => setForm((s) => ({ ...s, role: e.target.value }))}
              >
                <option value="user">user</option>
                <option value="artist">artist</option>
              </select>
            </div>
          </div>

          <div className="row">
            <button className="btn" type="submit" disabled={loading}>
              {loading ? 'Creating…' : 'Create account'}
            </button>
            <button
              className="btn secondary"
              type="button"
              onClick={() => setForm({ username: '', email: '', password: '', role: 'user' })}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}


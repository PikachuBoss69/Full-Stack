import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../state/AuthContext.jsx'

function NavItem({ to, children, end }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
    >
      {children}
    </NavLink>
  )
}

export function Layout() {
  const { user, logout, loading } = useAuth()
  const navigate = useNavigate()

  return (
    <div className="app">
      <header className="header">
        <div className="container header-inner">
          <Link to="/" className="brand">
            Spotify Project
          </Link>

          <nav className="nav">
            <NavItem to="/" end>
              Music
            </NavItem>
            <NavItem to="/albums">Albums</NavItem>
            <NavItem to="/artist">Artist</NavItem>
          </nav>

          <div className="auth-area">
            {user ? (
              <>
                <div className="user-pill" title={user.email}>
                  <span className="user-name">{user.username}</span>
                  <span className="user-role">{user.role}</span>
                </div>
                <button
                  className="btn secondary"
                  onClick={async () => {
                    await logout()
                    navigate('/login')
                  }}
                  disabled={loading}
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link className="btn secondary" to="/login">
                  Log in
                </Link>
                <Link className="btn" to="/register">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      <main className="container main">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span className="muted">
            API via <code>/api</code> proxy (dev) or <code>VITE_API_URL</code> (prod)
          </span>
        </div>
      </footer>
    </div>
  )
}


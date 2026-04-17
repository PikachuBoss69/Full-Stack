import { NavLink, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import AllPosts from './pages/AllPosts'
import Home from './pages/Home'

function App() {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="site-header__inner">
          <NavLink to="/" className="brand" end>
            <span className="brand__mark" aria-hidden />
            <span className="brand__text">Posting</span>
          </NavLink>
          <nav className="site-nav" aria-label="Main">
            <NavLink to="/" className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`} end>
              Home
            </NavLink>
            <NavLink
              to="/posts"
              className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`}
            >
              All posts
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`}
            >
              About
            </NavLink>
          </nav>
        </div>
      </header>

      <main id="main" className="site-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<AllPosts />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <p>Posting Site · React + Vite</p>
      </footer>
    </div>
  )
}

export default App

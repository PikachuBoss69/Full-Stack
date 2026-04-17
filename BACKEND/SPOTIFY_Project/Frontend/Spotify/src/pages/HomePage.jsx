import { useEffect, useMemo, useState } from 'react'
import { api } from '../utils/api.js'
import { useAuth } from '../state/AuthContext.jsx'

export function HomePage() {
  const { user } = useAuth()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [music, setMusic] = useState([])
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return music
    return music.filter((m) => (m.title ?? '').toLowerCase().includes(q))
  }, [music, query])

  useEffect(() => {
    let active = true
    async function run() {
      setError('')
      setLoading(true)
      try {
        const data = await api.get('/api/music/getmusic')
        if (!active) return
        setMusic(Array.isArray(data?.music) ? data.music : [])
      } catch (e) {
        if (!active) return
        setError(e.message || 'Failed to load music')
        setMusic([])
      } finally {
        if (active) setLoading(false)
      }
    }
    run()
    return () => {
      active = false
    }
  }, [user?.id])

  return (
    <section className="stack">
      <div className="page-head">
        <div>
          <h1>Music</h1>
          <p className="muted">
            Uses <code>GET /api/music/getmusic</code> (requires login cookie).
          </p>
        </div>

        <div className="row">
          <input
            className="input"
            placeholder="Search by title…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className="btn secondary"
            onClick={async () => {
              setQuery('')
              setError('')
              setLoading(true)
              try {
                const data = await api.get('/api/music/getmusic')
                setMusic(Array.isArray(data?.music) ? data.music : [])
              } catch (e) {
                setError(e.message || 'Failed to load music')
              } finally {
                setLoading(false)
              }
            }}
            disabled={loading}
          >
            Refresh
          </button>
        </div>
      </div>

      {!user ? (
        <div className="card">
          <h2>Log in to view music</h2>
          <p className="muted">
            Your backend protects this route with cookie-based JWT middleware.
          </p>
        </div>
      ) : (
        <>
          {error ? <div className="alert error">{error}</div> : null}
          {loading ? <div className="muted">Loading…</div> : null}

          <div className="grid">
            {filtered.map((m) => (
              <div key={m._id} className="card">
                <div className="card-title">{m.title || 'Untitled'}</div>
                <div className="muted small">
                  {m.artist?.username ? `by ${m.artist.username}` : 'Unknown artist'}
                </div>
                {m.audio ? (
                  <audio controls preload="none" src={m.audio} style={{ width: '100%' }} />
                ) : null}
                <div className="muted small mono">{m._id}</div>
              </div>
            ))}
          </div>

          {!loading && filtered.length === 0 ? (
            <div className="muted">No music found.</div>
          ) : null}
        </>
      )}
    </section>
  )
}


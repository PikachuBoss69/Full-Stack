import { useEffect, useState } from 'react'
import { api } from '../utils/api.js'
import { useAuth } from '../state/AuthContext.jsx'

export function AlbumsPage() {
  const { user } = useAuth()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    let active = true
    async function run() {
      if (!user) return
      setError('')
      setLoading(true)
      try {
        const data = await api.get('/api/music/getalbum')
        if (!active) return
        setAlbums(Array.isArray(data?.album) ? data.album : [])
      } catch (e) {
        if (!active) return
        setError(e.message || 'Failed to load albums')
        setAlbums([])
      } finally {
        if (active) setLoading(false)
      }
    }
    run()
    return () => {
      active = false
    }
  }, [user])

  return (
    <section className="stack">
      <div className="page-head">
        <div>
          <h1>Albums</h1>
          <p className="muted">
            Uses <code>GET /api/music/getalbum</code> (requires login cookie).
          </p>
        </div>
      </div>

      {!user ? (
        <div className="card">
          <h2>Log in to view albums</h2>
          <p className="muted">This endpoint is protected by your backend middleware.</p>
        </div>
      ) : (
        <>
          {error ? <div className="alert error">{error}</div> : null}
          {loading ? <div className="muted">Loading…</div> : null}

          <div className="grid">
            {albums.map((a) => (
              <div key={a._id} className="card">
                <div className="card-title">{a.title || 'Untitled'}</div>
                <div className="muted small">
                  {a.artist?.username ? `by ${a.artist.username}` : 'Unknown artist'}
                </div>
                <div className="muted small mono">{a._id}</div>
              </div>
            ))}
          </div>

          {!loading && albums.length === 0 ? <div className="muted">No albums found.</div> : null}
        </>
      )}
    </section>
  )
}


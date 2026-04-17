import { useEffect, useMemo, useState } from 'react'
import { api } from '../utils/api.js'
import { useAuth } from '../state/AuthContext.jsx'

export function ArtistPage() {
  const { user } = useAuth()
  const isArtist = user?.role === 'artist'

  const [uploadTitle, setUploadTitle] = useState('')
  const [uploadFile, setUploadFile] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [uploadError, setUploadError] = useState('')
  const [uploadOk, setUploadOk] = useState('')

  const [music, setMusic] = useState([])
  const [loadingMusic, setLoadingMusic] = useState(false)

  const [albumTitle, setAlbumTitle] = useState('')
  const [selectedIds, setSelectedIds] = useState(new Set())
  const [creatingAlbum, setCreatingAlbum] = useState(false)
  const [albumError, setAlbumError] = useState('')
  const [albumOk, setAlbumOk] = useState('')

  const mySongs = useMemo(() => {
    if (!user) return []
    return music.filter((m) => {
      const artistId = m?.artist?._id || m?.artist?.id || m?.artist
      return artistId?.toString?.() === user.id?.toString?.()
    })
  }, [music, user])

  useEffect(() => {
    let active = true
    async function run() {
      if (!user) return
      setLoadingMusic(true)
      try {
        const data = await api.get('/api/music/getmusic?limit=200')
        if (!active) return
        setMusic(Array.isArray(data?.music) ? data.music : [])
      } catch {
        if (!active) return
        setMusic([])
      } finally {
        if (active) setLoadingMusic(false)
      }
    }
    run()
    return () => {
      active = false
    }
  }, [user])

  if (!user) {
    return (
      <section className="stack">
        <h1>Artist tools</h1>
        <div className="card">
          <h2>Log in first</h2>
          <p className="muted">These endpoints require an authenticated cookie.</p>
        </div>
      </section>
    )
  }

  if (!isArtist) {
    return (
      <section className="stack">
        <h1>Artist tools</h1>
        <div className="card">
          <h2>Artist role required</h2>
          <p className="muted">
            Your backend protects upload endpoints with <code>authArtist</code>.
          </p>
          <p className="muted small">
            Tip: create a new account with role <code>artist</code>.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="stack">
      <div className="page-head">
        <div>
          <h1>Artist tools</h1>
          <p className="muted">
            Upload uses <code>POST /api/music</code> (multipart field: <code>audio</code>).
          </p>
        </div>
      </div>

      <div className="grid-2">
        <div className="card stack">
          <h2>Upload song</h2>
          {uploadError ? <div className="alert error">{uploadError}</div> : null}
          {uploadOk ? <div className="alert ok">{uploadOk}</div> : null}

          <div className="field">
            <label className="label">Title</label>
            <input
              className="input"
              value={uploadTitle}
              onChange={(e) => setUploadTitle(e.target.value)}
              placeholder="Song title"
            />
          </div>

          <div className="field">
            <label className="label">Audio file</label>
            <input
              className="input"
              type="file"
              accept="audio/*"
              onChange={(e) => setUploadFile(e.target.files?.[0] ?? null)}
            />
          </div>

          <div className="row">
            <button
              className="btn"
              disabled={uploading || !uploadFile}
              onClick={async () => {
                setUploadError('')
                setUploadOk('')
                setUploading(true)
                try {
                  const fd = new FormData()
                  fd.append('title', uploadTitle)
                  fd.append('audio', uploadFile)
                  const data = await api.postForm('/api/music', fd)
                  setUploadOk(data?.message || 'Uploaded')
                  setUploadTitle('')
                  setUploadFile(null)

                  const next = await api.get('/api/music/getmusic?limit=200')
                  setMusic(Array.isArray(next?.music) ? next.music : [])
                } catch (e) {
                  setUploadError(e.message || 'Upload failed')
                } finally {
                  setUploading(false)
                }
              }}
            >
              {uploading ? 'Uploading…' : 'Upload'}
            </button>

            <button
              className="btn secondary"
              onClick={() => {
                setUploadTitle('')
                setUploadFile(null)
                setUploadError('')
                setUploadOk('')
              }}
              disabled={uploading}
            >
              Reset
            </button>
          </div>
        </div>

        <div className="card stack">
          <h2>Create album</h2>
          {albumError ? <div className="alert error">{albumError}</div> : null}
          {albumOk ? <div className="alert ok">{albumOk}</div> : null}

          <div className="field">
            <label className="label">Album title</label>
            <input
              className="input"
              value={albumTitle}
              onChange={(e) => setAlbumTitle(e.target.value)}
              placeholder="Album title"
            />
          </div>

          <div className="field">
            <label className="label">Pick songs</label>
            <div className="picklist">
              {loadingMusic ? <div className="muted">Loading your songs…</div> : null}
              {mySongs.map((m) => {
                const checked = selectedIds.has(m._id)
                return (
                  <label key={m._id} className="pickitem">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => {
                        setSelectedIds((prev) => {
                          const next = new Set(prev)
                          if (next.has(m._id)) next.delete(m._id)
                          else next.add(m._id)
                          return next
                        })
                      }}
                    />
                    <span>{m.title || 'Untitled'}</span>
                    <span className="muted small mono">{m._id}</span>
                  </label>
                )
              })}
              {!loadingMusic && mySongs.length === 0 ? (
                <div className="muted">No songs yet. Upload one first.</div>
              ) : null}
            </div>
          </div>

          <div className="row">
            <button
              className="btn"
              disabled={creatingAlbum || !albumTitle || selectedIds.size === 0}
              onClick={async () => {
                setAlbumError('')
                setAlbumOk('')
                setCreatingAlbum(true)
                try {
                  const payload = { title: albumTitle, musics: Array.from(selectedIds) }
                  const data = await api.post('/api/music/album', payload)
                  setAlbumOk(data?.message || 'Album created')
                  setAlbumTitle('')
                  setSelectedIds(new Set())
                } catch (e) {
                  setAlbumError(e.message || 'Album creation failed')
                } finally {
                  setCreatingAlbum(false)
                }
              }}
            >
              {creatingAlbum ? 'Creating…' : 'Create album'}
            </button>
            <button
              className="btn secondary"
              onClick={() => {
                setAlbumTitle('')
                setSelectedIds(new Set())
                setAlbumError('')
                setAlbumOk('')
              }}
              disabled={creatingAlbum}
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      <div className="card stack">
        <h2>Your uploaded songs</h2>
        <p className="muted small">Filtered from the music list by your user id.</p>
        <div className="grid">
          {mySongs.map((m) => (
            <div key={m._id} className="card inner">
              <div className="card-title">{m.title || 'Untitled'}</div>
              {m.audio ? <audio controls preload="none" src={m.audio} style={{ width: '100%' }} /> : null}
              <div className="muted small mono">{m._id}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


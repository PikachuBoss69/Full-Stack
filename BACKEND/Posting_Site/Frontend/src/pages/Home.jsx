import { useId, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createPost } from '../api/posts'

export default function Home() {
  const navigate = useNavigate()
  const inputId = useId()
  const [file, setFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState('')
  const [caption, setCaption] = useState('')
  const [status, setStatus] = useState({ type: 'idle', message: '' })
  const [submitting, setSubmitting] = useState(false)

  function onFileChange(e) {
    const f = e.target.files?.[0]
    setFile(f ?? null)
    setPreviewUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev)
      return f ? URL.createObjectURL(f) : ''
    })
    setStatus({ type: 'idle', message: '' })
  }

  async function onSubmit(e) {
    e.preventDefault()
    if (!file) {
      setStatus({ type: 'error', message: 'Choose an image to upload.' })
      return
    }
    setSubmitting(true)
    setStatus({ type: 'idle', message: '' })
    try {
      await createPost({ file, caption })
      setCaption('')
      setFile(null)
      if (previewUrl) URL.revokeObjectURL(previewUrl)
      setPreviewUrl('')
      e.target.reset()
      setStatus({ type: 'success', message: 'Posted! Redirecting to the gallery…' })
      setTimeout(() => navigate('/posts'), 800)
    } catch (err) {
      setStatus({ type: 'error', message: err.message || 'Something went wrong.' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="page home-page">
      <header className="page-header">
        <p className="eyebrow">Create</p>
        <h1>Share a moment</h1>
        <p className="lede">
          Upload an image and a short caption. It is saved through your backend and appears in{' '}
          <Link to="/posts">all posts</Link>.
        </p>
      </header>

      <form className="card upload-card" onSubmit={onSubmit}>
        <label className="field-label" htmlFor={inputId}>
          Image
        </label>
        <div className={`drop-zone ${previewUrl ? 'drop-zone--has-file' : ''}`}>
          <input
            id={inputId}
            name="image"
            type="file"
            accept="image/*"
            className="visually-hidden"
            onChange={onFileChange}
          />
          {previewUrl ? (
            <div className="preview-wrap">
              <img src={previewUrl} alt="" className="preview-img" />
              <button
                type="button"
                className="btn btn-ghost btn-small"
                onClick={() => {
                  setFile(null)
                  if (previewUrl) URL.revokeObjectURL(previewUrl)
                  setPreviewUrl('')
                }}
              >
                Remove
              </button>
            </div>
          ) : (
            <label htmlFor={inputId} className="drop-zone__cta">
              <span className="drop-zone__title">Drop an image or browse</span>
              <span className="drop-zone__hint">PNG, JPG, WebP — up to what your server allows</span>
            </label>
          )}
        </div>

        <label className="field-label" htmlFor="caption">
          Caption
        </label>
        <textarea
          id="caption"
          name="caption"
          className="input textarea"
          rows={3}
          placeholder="What is this about?"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />

        {status.message ? (
          <p className={`form-status form-status--${status.type}`} role="status">
            {status.message}
          </p>
        ) : null}

        <div className="form-actions">
          <button type="submit" className="btn btn-primary" disabled={submitting}>
            {submitting ? 'Posting…' : 'Submit post'}
          </button>
          <Link to="/posts" className="btn btn-ghost">
            View all posts
          </Link>
        </div>
      </form>
    </div>
  )
}

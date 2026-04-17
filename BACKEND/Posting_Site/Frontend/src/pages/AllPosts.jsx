import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deletePost, fetchPosts } from '../api/posts'

export default function AllPosts() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [deletingId, setDeletingId] = useState(null)
  const [deleteError, setDeleteError] = useState('')

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      setLoading(true)
      setError('')
      try {
        const data = await fetchPosts()
        if (!cancelled) setPosts(Array.isArray(data) ? data : [])
      } catch (e) {
        if (!cancelled) setError(e.message || 'Could not load posts.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [])

  async function handleDelete(postId) {
    if (!window.confirm('Delete this post? It will be removed from the database and this gallery.')) {
      return
    }
    setDeleteError('')
    setDeletingId(postId)
    try {
      await deletePost(postId)
      setPosts((prev) => prev.filter((p) => p._id !== postId))
    } catch (e) {
      setDeleteError(e.message || 'Delete failed.')
    } finally {
      setDeletingId(null)
    }
  }

  return (
    <div className="page posts-page">
      <header className="page-header page-header--row">
        <div>
          <p className="eyebrow">Gallery</p>
          <h1>All posts</h1>
          <p className="lede">Everything uploaded from the home page.</p>
        </div>
        <Link to="/" className="btn btn-primary">
          New post
        </Link>
      </header>

      {deleteError ? (
        <p className="gallery-banner gallery-banner--error" role="alert">
          {deleteError}
        </p>
      ) : null}

      {loading ? (
        <div className="grid posts-grid" aria-busy="true">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="card post-card post-card--skeleton" />
          ))}
        </div>
      ) : error ? (
        <div className="card empty-state">
          <p className="empty-state__title">{error}</p>
          <p className="empty-state__text">Make sure the API is running and the dev proxy is configured.</p>
          <button type="button" className="btn btn-primary" onClick={() => window.location.reload()}>
            Retry
          </button>
        </div>
      ) : posts.length === 0 ? (
        <div className="card empty-state">
          <p className="empty-state__title">No posts yet</p>
          <p className="empty-state__text">Upload your first image from the home page.</p>
          <Link to="/" className="btn btn-primary">
            Go to home
          </Link>
        </div>
      ) : (
        <div className="grid posts-grid">
          {posts.map((post) => (
            <article key={post._id} className="card post-card">
              <div className="post-card__media">
                <img src={post.image} alt={post.caption || 'Post image'} loading="lazy" />
                <button
                  type="button"
                  className="post-card__delete"
                  disabled={deletingId === post._id}
                  onClick={() => handleDelete(post._id)}
                  aria-label="Delete post"
                  title="Delete post"
                >
                  {deletingId === post._id ? '…' : '×'}
                </button>
              </div>
              <div className="post-card__body">
                <p className="post-card__caption">{post.caption?.trim() || 'No caption'}</p>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}

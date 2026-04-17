import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="page about-page">
      <header className="page-header">
        <p className="eyebrow">About</p>
        <h1>Posting Site</h1>
        <p className="lede">
          A small full-stack flow: images go to your cloud storage, metadata lives in MongoDB, and this
          React app lists everything in one place.
        </p>
      </header>

      <div className="card about-card">
        <h2 className="about-card__h2">How it works</h2>
        <ol className="about-list">
          <li>
            <strong>Home</strong> — pick an image, add a caption, submit. The form posts multipart data to{' '}
            <code>/Create_Post</code>.
          </li>
          <li>
            <strong>All posts</strong> — reads <code>/post</code> and renders a responsive gallery.
          </li>
          <li>
            <strong>Dev tip</strong> — with Vite, API calls use the <code>/api</code> proxy so you do not need
            CORS on localhost.
          </li>
        </ol>
        <div className="about-actions">
          <Link to="/" className="btn btn-primary">
            Upload
          </Link>
          <Link to="/posts" className="btn btn-ghost">
            Gallery
          </Link>
        </div>
      </div>
    </div>
  )
}

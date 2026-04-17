export function getApiBase() {
  const fromEnv = import.meta.env.VITE_API_URL?.replace(/\/$/, '')
  if (fromEnv) return fromEnv
  if (import.meta.env.DEV) return '/api'
  return ''
}

export async function fetchPosts() {
  const base = getApiBase()
  const res = await fetch(`${base}/post`)
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(data.message || 'Could not load posts')
  return data.post ?? []
}

export async function createPost({ file, caption }) {
  const base = getApiBase()
  const fd = new FormData()
  fd.append('image', file)
  fd.append('caption', caption ?? '')
  const res = await fetch(`${base}/Create_Post`, { method: 'POST', body: fd })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(data.message || 'Upload failed')
  return data
}

export async function deletePost(id) {
  const base = getApiBase()
  const res = await fetch(`${base}/post/${encodeURIComponent(id)}`, { method: 'DELETE' })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(data.message || 'Could not delete post')
  return data
}

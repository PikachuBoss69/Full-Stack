const baseUrl = (import.meta.env.VITE_API_URL ?? '').replace(/\/$/, '')

async function request(path, { method, body, headers } = {}) {
  const url = baseUrl ? `${baseUrl}${path}` : path

  const res = await fetch(url, {
    method,
    credentials: 'include',
    headers,
    body,
  })

  const contentType = res.headers.get('content-type') ?? ''
  const isJson = contentType.includes('application/json')
  const data = isJson ? await res.json().catch(() => null) : await res.text().catch(() => null)

  if (!res.ok) {
    const message =
      (data && typeof data === 'object' && (data.message || data.error)) ||
      (typeof data === 'string' && data) ||
      `Request failed (${res.status})`
    const err = new Error(message)
    err.status = res.status
    err.data = data
    throw err
  }

  return data
}

export const api = {
  get(path) {
    return request(path, { method: 'GET' })
  },
  post(path, jsonBody) {
    return request(path, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(jsonBody ?? {}),
    })
  },
  postForm(path, formData) {
    return request(path, { method: 'POST', body: formData })
  },
}


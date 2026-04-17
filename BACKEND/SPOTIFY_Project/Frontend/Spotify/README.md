# Spotify Project (Full‑Stack)

This repository contains:
- **Backend (built by you)**: `BACKEND/SPOTIFY_Project/Backend`
- **Frontend (generated with Cursor, then integrated)**: `BACKEND/SPOTIFY_Project/Frontend/Spotify`

The backend exposes an API for authentication + music/albums. The frontend consumes those endpoints and relies on cookie-based auth.

## Technologies

### Backend (your work)
- **Node.js**
- **Express** (REST API)
- **MongoDB + Mongoose** (database + ODM)
- **JWT** (auth token stored in HTTP cookie)
- **cookie-parser** (read auth cookie)
- **bcryptjs** (password hashing)
- **multer** (multipart upload for audio files)
- **dotenv** (environment variables)
- **ImageKit** (`@imagekit/nodejs`) for storing uploaded audio files

### Frontend (generated with Cursor)
Note: the frontend app was generated using Cursor and then wired to your backend API.
- **React**
- **Vite**
- **React Router**

## Dependencies (package.json)

### Backend dependencies
From `Backend/package.json`:
- `express`
- `mongoose`
- `jsonwebtoken`
- `cookie-parser`
- `bcryptjs`
- `multer`
- `dotenv`
- `@imagekit/nodejs`

### Frontend dependencies
From `Frontend/Spotify/package.json`:
- `react`
- `react-dom`
- `react-router-dom`
- dev: `vite`, `@vitejs/plugin-react`, `eslint` (+ related plugins/config)

## API (Backend)

Base path is mounted in `Backend/src/app.js`:
- `/api/auth/*`
- `/api/music/*`

### Auth routes
- `POST /api/auth/register`
- `POST /api/auth/logIn`
- `POST /api/auth/logOut`

### Music routes
- `POST /api/music` *(artist only)* — multipart upload, field name: `audio`
- `POST /api/music/album` *(artist only)*
- `GET /api/music/getmusic` *(user or artist)*
- `GET /api/music/getalbum` *(user or artist)*
- `GET /api/music/getsongsAlbum` *(user or artist)* *(note: controller currently expects `albumId` in params)*

## Environment Variables

Create `Backend/.env` (do **not** commit secrets). Expected variables used by the backend code:
- **`PORT`**: (optional) backend port, default `3000`
- **`MONGO_URL`**: MongoDB connection string
- **`JWT_SECRET_KEY`**: secret used to sign JWTs
- **`IMAGEKIT_PRIVATE_KEY`**: ImageKit private key (used by `services/cloud.service.js`)

## Run (Development)

### 1) Start backend
From `BACKEND/SPOTIFY_Project/Backend`:

```bash
npm install
npm run dev
```

Backend listens on `http://localhost:3000` unless `PORT` is set.

### 2) Start frontend
From `BACKEND/SPOTIFY_Project/Frontend/Spotify`:

```bash
npm install
npm run dev
```

The frontend is configured to call the backend through a Vite dev proxy:
- Requests to **`/api/*`** from the frontend are proxied to **`http://localhost:3000`**
- Cookie auth works because requests use `credentials: "include"` and the proxy keeps it same-origin in dev

## Notes / Limitations
- **Production deployments**: if frontend and backend are on different domains, cookie auth may require CORS + cookie flags. In dev, the Vite proxy avoids that.
- **`GET /api/music/getsongsAlbum`**: backend controller expects `albumId` from route params, but the current route does not include `:albumId`.

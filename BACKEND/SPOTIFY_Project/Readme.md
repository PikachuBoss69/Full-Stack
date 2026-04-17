# 🎵 Spotify Backend + Frontend Integration

A full-stack music platform inspired by Spotify, where users can upload, manage, and stream music.
The backend is built from scratch with scalable architecture, while the frontend is generated using Cursor and integrated with the backend APIs.

---

## 🚀 Project Overview

This project focuses on:

* Building a **robust backend system** for music handling
* Implementing **authentication & authorization (JWT-based)**
* Handling **file uploads (audio)** efficiently
* Designing a **scalable database structure**
* Integrating a **frontend UI with backend APIs**

---

## 🧑‍💻 Contribution

* **Backend:** Built entirely by me
* **Frontend:** Generated using Cursor and integrated with backend APIs

---

## 🛠️ Tech Stack

### 🔹 Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (Authentication & Authorization)
* Multer (File Upload Handling)
* Cookie Parser
* Cloud Upload Service (for storing audio files)

---

### 🔹 Frontend

* React (Vite)
* Axios (API integration)
* Basic CSS

---

## 🔐 Features

### ✅ Authentication & Authorization

* JWT-based authentication
* Role-based access control (Artist / User)
* Secure cookie-based token handling

---

### 🎵 Music Management

* Upload music files (audio)
* Store music metadata (title, artist, URI)
* Fetch music with filtering (by title)
* Pagination support for scalability

---

### 💿 Album System (Optimized Design)

* Albums store only metadata (lightweight)
* Songs are linked to albums (optional relation)
* Separate API to fetch songs of an album
* Avoids heavy nested data → scalable design

---

### 📦 File Upload System

* Multer for handling `multipart/form-data`
* Audio files processed and uploaded to cloud storage
* Efficient buffer handling

---

## 📁 Project Structure

### Backend

```
Backend/
 ├── models/
 ├── routes/
 ├── controllers/
 ├── middleware/
 ├── services/
 └── app.js
```

### Frontend

```
frontend/
 ├── src/
 │    ├── api/
 │    ├── pages/
 │    ├── components/
 │    └── App.jsx
```

---

## 🔗 API Endpoints (Sample)

### 🎵 Music

* `POST /api/music/create` → Upload music
* `GET /api/music/getmusic?title=xyz` → Search music

### 💿 Albums

* `GET /api/albums` → Get all albums
* `GET /api/albums/:id/songs` → Get songs of album

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone <your-repo-link>
```

---

### 2️⃣ Backend setup

```bash
cd Backend
npm install
npm run dev
```

---

### 3️⃣ Frontend setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file in backend:

```env
PORT=3000
MONGO_URI=your_mongodb_connection
JWT_SECRET_KEY=your_secret_key
```

---

## ⚠️ Important Notes

* File upload field name must match backend (`audio`)
* Cookies must be enabled (`withCredentials: true`) for authentication
* Music can exist **with or without an album** (flexible design)

---

## 🧠 Key Learning Outcomes

* Designing **scalable backend architecture**
* Understanding **JWT + cookies deeply**
* Handling **file uploads correctly**
* Avoiding common mistakes in MongoDB schema design
* Building **real-world API systems**

---

## 🚀 Future Improvements

* Streaming support for audio
* Playlist system (many-to-many relation)
* Search optimization (text index / Elasticsearch)
* UI enhancements

---

## 📌 Final Note

This project is focused on **backend strength and system design**, not just UI.
The architecture is built keeping **real-world scalability in mind**, not just basic CRUD.

---

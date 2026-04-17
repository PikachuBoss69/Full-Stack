# 🎬 MediaSearch App

A simple React-based media search application where users can search for photos and videos, view results, and save their favorite items into a personal collection.

---

## 🚀 Features

* 🔍 Search for photos and videos
* 📂 Switch between tabs (Photos / Videos)
* 💾 Save items to a collection
* ❌ Remove items from collection
* 🔔 Toast notifications for actions
* ⚡ Fast UI with responsive grid layout

---

## 🛠️ Tech Stack

* React.js
* Redux Toolkit (state management)
* React Router (routing)
* Tailwind CSS (styling)
* External APIs (for media content)

---

## 📁 Project Structure

```
src/
│
├── components/
│   ├── NavBar
│   ├── ResultGrid
│   ├── ResultCard
│   ├── CollectionCard
│   └── Tabs
│
├── pages/
│   ├── Home
│   └── CollectionPage
│
├── redux/
│   └── features/
│       ├── searchSlice
│       └── collectionSlice
│
└── api/
    └── mediaApi
```

---

## ⚙️ How It Works

* User enters a search query
* App fetches data from API (photos/videos)
* Results are displayed in a grid
* User can save items → stored in Redux + localStorage
* Collection page shows saved items

---

## 📦 Installation

```bash
git clone <your-repo-link>
cd your-project-name
npm install
npm run dev
```

---

## ⚠️ Known Issues / Limitations

* No backend (data stored only in localStorage)
* No authentication
* Performance can drop if loading full-size media
* Video autoplay may affect performance

---

## 📈 Future Improvements

* Add infinite scrolling
* Optimize media loading (lazy loading, thumbnails)
* Add backend for persistent storage
* Improve UI/UX (animations, better layout)

---

## 🙌 Author

Made by a pikachuBoss trying to improve in frontend + web3 development.

---

## ⭐ Note

This project is mainly for learning purposes and improving React + Redux concepts.

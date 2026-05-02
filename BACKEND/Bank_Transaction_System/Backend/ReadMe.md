
# 🏦 Bank Transaction System (Backend)

![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-Framework-000000?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/Auth-JWT-blue)
![OAuth2](https://img.shields.io/badge/Email-OAuth2-red)
![Mongoose](https://img.shields.io/badge/Mongoose-ODM-880000)
![API](https://img.shields.io/badge/API-RESTful-orange)
![Architecture](https://img.shields.io/badge/Design-Ledger--Based-important)
![Security](https://img.shields.io/badge/Security-Authorization-critical)
![Status](https://img.shields.io/badge/status-active-success)


A secure and scalable backend system for handling user authentication, account management, and financial transactions.
This project focuses on **real-world backend concepts** like atomic transactions, idempotency, and ledger-based accounting.

---

## 🚀 Highlights

* 🔐 Secure authentication with JWT
* 💸 Reliable transaction system with idempotency
* 📊 Ledger-based balance calculation (bank-grade design)
* ⚡ Atomic database transactions using MongoDB sessions
* 📧 Email notifications via Gmail OAuth2
* 🛑 Strong data integrity and access control

---

## 🧠 Core Concepts Implemented

### 🔁 Idempotency

Each transaction includes a unique `idempotencyKey` to prevent duplicate execution during retries.

### 📊 Ledger-Based Accounting

Balances are **not stored directly**. Instead:

```text
balance = totalCredit - totalDebit
```

Every transaction creates:

* 1 Debit entry
* 1 Credit entry

---

### ⚡ Atomic Transactions

MongoDB sessions ensure:

* Either all operations succeed
* Or none are applied

---

### 🔒 Access Control

* Users can only operate on their own accounts
* System-level operations are restricted via middleware

---

## 🏗️ Architecture Overview

```text
Request → Middleware → Controller → Service Logic → Database
```

* **Middleware** → Authentication & authorization
* **Controller** → Handles request/response
* **Service Logic** → Business logic (transactions, ledger)
* **Database** → MongoDB with Mongoose

---

## 🧰 Tech Stack

**Backend**

* Node.js
* Express.js

**Database**

* MongoDB (Mongoose)

---

## 📦 Dependencies

* express
* mongoose
* jsonwebtoken
* bcrypt / bcryptjs
* cookie-parser
* dotenv
* nodemailer
* googleapis

---

## 🌐 External Services

* MongoDB Atlas (database)
* Gmail SMTP (OAuth2) for emails
* Google Cloud Console (OAuth credentials)

---

## 📂 Key Features

### 🔐 Authentication

* Register & Login
* JWT-based authentication
* Cookie-based session handling
* Logout with token blacklisting

---

### 💸 Transactions

* Transfer money between accounts
* Prevent duplicate transactions (idempotency)
* Transaction states: `PENDING`, `COMPLETED`, `FAILED`, `REVERSED`

---

### 📊 Ledger System

* Immutable ledger entries
* Full transaction traceability
* Accurate balance calculation

---

### 📧 Email Notifications

* Welcome email on registration
* Transaction confirmation emails

---

## ⚠️ Challenges & Learnings

This project involved solving several real-world backend problems:

* Understanding **idempotency beyond theory**
* Working with **MongoDB transactions and sessions**
* Debugging **ObjectId vs string mismatches**
* Designing **ledger-based systems instead of simple balance storage**
* Handling **OAuth2 email integration issues**
* Fixing **silent async failures**
* Implementing **proper authorization (not just authentication)**

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/bank-transaction-system.git
cd bank-transaction-system
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Setup environment variables

Create a `.env` file:

```env
PORT=3000
MONGO_URI=your_mongodb_uri

JWT_SECRET_KEY=your_secret

EMAIL_USER=your_email@gmail.com
CLIENT_ID=your_google_client_id
CLIENT_SECRET=your_google_client_secret
REFRESH_TOKEN=your_refresh_token
```

---

### 4. Run the server

```bash
npm run dev
```

---

## 🧪 Example API Endpoints

| Method | Endpoint                                | Description        |
| ------ | --------------------------------------- | ------------------ |
| POST   | `/api/auth/register`                    | Register user      |
| POST   | `/api/auth/login`                       | Login              |
| POST   | `/api/auth/logout`                      | LogOut             |

| POST   | `/api/transaction/`                     | Create transaction |
| POST   | `/api/transaction/system/initial-funds` | System funding     |

| POST   | `/api/account/createAcc`                | Create Account     |
| POST   | `/api/account/getAcc`                   | See Account Info   |
| POST   | `/api/account/getAccBalance`            | get Account Balance|

---

## 🚀 Future Improvements

* Rate limiting for APIs
* Fraud detection system
* Queue-based email processing
* Refresh token authentication flow
* Admin dashboard

---

## 📌 Final Thoughts

This project reflects a shift from basic CRUD APIs to designing systems with **data integrity, security, and real-world reliability** in mind.

---

> *“Correctness and consistency matter more than complexity in backend systems.”*

# 📚 LuminaBooks — Online Book Shopping

<div align="center">

![LuminaBooks Banner](https://img.shields.io/badge/LuminaBooks-Online%20Bookstore-blueviolet?style=for-the-badge&logo=bookstack&logoColor=white)

[![React](https://img.shields.io/badge/React-Vite-61DAFB?style=flat-square&logo=react)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat-square&logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=flat-square&logo=mongodb)](https://www.mongodb.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

**A modern, full-stack online bookstore with a beautiful glassmorphism UI and end-to-end shopping experience.**

[Features](#-features) • [Tech Stack](#️-tech-stack) • [Getting Started](#-getting-started) • [Project Structure](#-project-structure) • [Contributing](#-contributing)

</div>

---

## 🌟 Overview

LuminaBooks is a full-featured online bookstore built with the **MERN stack** (MongoDB, Express, React, Node.js). It delivers a polished, responsive shopping experience — from browsing books to multi-step checkout — complete with a glassmorphism-styled UI and live email support via Nodemailer.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🏪 **Storefront & Browsing** | Explore a curated book catalog with a visually rich, modern interface |
| 🛒 **Cart & Checkout** | Smooth multi-step checkout with shipping tracking and flexible payment options (Credit Card or Cash on Delivery) |
| 👤 **Profile Dashboard** | View order history, manage notifications, toggle dark mode, and review account details |
| 📧 **Contact Form** | Functional contact page powered by Nodemailer — messages are delivered directly to a configured inbox |
| 📱 **Fully Responsive** | Seamlessly adapts across mobile, tablet, and desktop screen sizes |

---

## 🛠️ Tech Stack

### Frontend
| Tool | Purpose |
|---|---|
| [React](https://react.dev/) + [Vite](https://vitejs.dev/) | UI framework & build tooling |
| Vanilla CSS (Glassmorphism) | Styling & visual design |
| [React Router](https://reactrouter.com/) | Client-side routing |
| [Axios](https://axios-http.com/) | HTTP request handling |
| [Lucide React](https://lucide.dev/) | Icon library |

### Backend
| Tool | Purpose |
|---|---|
| [Node.js](https://nodejs.org/) + [Express.js](https://expressjs.com/) | Server & REST API |
| [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/) | Database & ODM |
| [Nodemailer](https://nodemailer.com/) | Transactional email dispatching |
| [dotenv](https://github.com/motdotla/dotenv) | Environment variable management |

---

## 🚀 Getting Started

### Prerequisites

Make sure the following are installed on your machine:

- [Node.js](https://nodejs.org/en/) `v16.0+`
- [MongoDB](https://www.mongodb.com/try/download/community) (local on port `27017`) or a [MongoDB Atlas](https://www.mongodb.com/atlas) cluster

---

### 1. Clone the Repository

```bash
git clone https://github.com/sahanajkhan/book_online_shoping.git
cd book_online_shoping
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend/` directory:

```env
MONGO_URI=mongodb://127.0.0.1:27017/book_store
PORT=5000
EMAIL_USER=your_email_address@gmail.com
EMAIL_PASS=your_16_digit_google_app_password
```

> **💡 Gmail App Password:** To use the contact form, generate a [16-digit Google App Password](https://myaccount.google.com/apppasswords) and set it as `EMAIL_PASS`. This is separate from your regular Gmail password and is required for programmatic email sending.

Start the backend server:

```bash
node server.js
```

You should see the server running at `http://localhost:5000`.

---

### 3. Frontend Setup

Open a **new terminal window** and run:

```bash
# From the project root
npm install
npm run dev
```

The frontend will start at `http://localhost:5173` and automatically connect to the backend at `http://localhost:5000`.

---

### 4. You're All Set! 🎉

Open your browser and navigate to:

```
http://localhost:5173
```

> ⚠️ Both terminals (backend + frontend) must remain running for the full application to work correctly.

---

## 📁 Project Structure

```
book_online_shoping/
├── backend/                  # Express + Node.js API
│   ├── models/               # Mongoose data models
│   ├── routes/               # API route handlers
│   ├── server.js             # Server entry point
│   └── .env                  # Environment variables (not committed)
│
├── src/                      # React frontend (Vite)
│   ├── components/           # Reusable UI components
│   ├── pages/                # Page-level views
│   └── main.jsx              # App entry point
│
├── public/                   # Static assets
├── package.json              # Frontend dependencies
└── README.md
```

---

## 🔧 Environment Variables

| Variable | Description | Example |
|---|---|---|
| `MONGO_URI` | MongoDB connection string | `mongodb://127.0.0.1:27017/book_store` |
| `PORT` | Port for the Express server | `5000` |
| `EMAIL_USER` | Gmail address for Nodemailer | `you@gmail.com` |
| `EMAIL_PASS` | 16-digit Google App Password | `abcd efgh ijkl mnop` |

> ⚠️ **Never commit your `.env` file.** Make sure `.env` is listed in your `.gitignore`.

---

## 🤝 Contributing
(Riya Bansal , Shahanaj Kham)
Contributions are welcome! To get started:

1. **Fork** the repository
2. **Create a branch** for your feature or fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit** your changes with clear, descriptive messages:
   ```bash
   git commit -m "feat: add book search functionality"
   ```
4. **Push** to your fork and open a **Pull Request** against `main`

Please ensure your code is clean, well-commented, and doesn't break existing functionality before submitting.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE). Feel free to use, fork, and build upon it.

---

<div align="center">
  Made with ❤️ and lots of ☕ &nbsp;|&nbsp; Happy reading! 📖
</div>

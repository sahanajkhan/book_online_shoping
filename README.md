# LuminaBooks - Online Book Shopping 📚

LuminaBooks is a modern, responsive online bookstore application built with the MERN stack (MongoDB, Express, React, Node.js). It offers a rich, glassmorphism-styled UI and robust backend capabilities, providing an end-to-end shopping experience from cart management to multi-step checkout and real-time email contact forms.

## ✨ Features

- **Storefront & Product Browsing**: Interactive storefront featuring modern UI aesthetics.
- **Cart & Multi-Step Checkout**: Add books to your cart and experience a smooth checkout flow including Shipping Location tracking and configurable Payment Selection (Credit Card or Cash-on-Delivery).
- **Personalized Profile Dashboard**: View "My Orders," configure Dark Mode visually, enable notifications, and review your account details.
- **Functional Contact Form**: A dynamic contact page powered by Nodemailer that correctly emails actual configured inbox addresses.
- **Responsive Design**: Flawlessly adjusts functionality on mobile phones, tablets, and desktop computers.

## 🛠️ Technology Stack

**Frontend:**
- React (bootstrapped with Vite)
- Vanilla CSS (Glassmorphism layout principles)
- Lucide-React (Icons)
- React Router (Routing logic over multi-page navigation)
- Axios (HTTP Requests)

**Backend:**
- Node.js & Express.js
- MongoDB (via Mongoose)
- Nodemailer (Handling programmatic email dispatching)
- dotenv (Environment Configuration)

---

## 🚀 Installation & Local Setup

### 1. Requirements
Ensure you have the following installed to run this project:
- [Node.js](https://nodejs.org/en/) (v16.0 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (Running locally on port `27017` or via MongoDB Atlas)

### 2. General Setup
Clone the repository, then split into fixing the frontend and backend dependencies locally:

```bash
git clone https://github.com/sahanajkhan/book_online_shoping.git
cd book_online_shoping
```

### 3. Backend Setup
Navigate into the `backend/` directory, install packages, and set up your environment variables.

```bash
# Move into backend
cd backend

# Install express dependencies
npm install
```

**Create a `.env` file** in the `backend` folder and populate it with:
```env
MONGO_URI=mongodb://127.0.0.1:27017/book_store
PORT=5000
EMAIL_USER=your_email_address@gmail.com
EMAIL_PASS=your_16_digit_google_app_password
```
_Note: To use the contact form properly, you must supply a 16-digit Google App Password associated with your `EMAIL_USER` address._

**Run the Backend Server:**
```bash
node server.js
```

### 4. Frontend Setup
Open a brand new, separate terminal and run the React frontend root:

```bash
# Return to the root folder of the project if you were in backend/
cd book_online_shoping

# Install React/Vite dependencies
npm install

# Start the frontend
npm run dev
```

### 5. Start Shopping!
Once both terminals are running, crack open your browser to `http://localhost:5173`. 
The frontend natively connects directly to your localhost Node API on `http://localhost:5000`.

## 🤝 Project Notes
To contribute, create a personal git branch locally prior to pushing or merging changes to ensure continuous stability. 
Enjoy buying your next great book!

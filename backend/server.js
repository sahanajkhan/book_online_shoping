const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/auth');
const contactRoutes = require('./routes/contact');
app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);

// Connect to MongoDB Atlas
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB', err));

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});


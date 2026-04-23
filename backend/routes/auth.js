const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'fallback_secret', {
    expiresIn: '30d'
  });
};

// @route POST /api/auth/register
router.post('/register', async (req, res) => {
  console.log('--- NEW REGISTRATION REQUEST ---');
  console.log('Body:', req.body);
  try {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
      console.log('Registration Failed: User already exists');
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = await User.create({ name, email, password });
    if (user) {
      console.log('Registration Success! Created user:', user.email);
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id)
      });
    } else {
      console.log('Registration Failed: Invalid user data');
      res.status(400).json({ message: 'Invalid user data' });
    }
  } catch (error) {
    console.error('Registration Catch Error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// @route POST /api/auth/login
router.post('/login', async (req, res) => {
  console.log('--- NEW LOGIN REQUEST ---');
  console.log('Email Attempt:', req.body.email);
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      console.log('Login Success for:', email);
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id)
      });
    } else {
      console.log('Login Failed: Invalid email or password');
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Login Catch Error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// @route   GET /api/books
// @desc    Get all books
// @access  Public
router.get('/', async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.json(books);
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/books/:id
// @desc    Get book by ID
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (error) {
    console.error('Error fetching book:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/books
// @desc    Add a new book
// @access  Public (in real app, should be admin protected)
router.post('/', async (req, res) => {
  const { title, author, price, description, image, rating, previewPages } = req.body;

  if (!title || !author || !price) {
    return res.status(400).json({ message: 'Please provide title, author, and price' });
  }

  try {
    const newBook = new Book({
      title,
      author,
      price,
      description,
      image,
      rating,
      previewPages: previewPages || []
    });

    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (error) {
    console.error('Error adding book:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

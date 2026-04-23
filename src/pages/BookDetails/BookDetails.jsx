import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star } from 'lucide-react';
import { MOCK_BOOKS } from '../../data/books';
import { CartContext } from '../../context/CartContext';
import './BookDetails.css';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [book, setBook] = useState(null);

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    const fetchBookDetails = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/books/${id}`);
        setBook(res.data);
      } catch (err) {
        console.error('Failed to fetch book from API, trying local fallback', err);
        // Fallback to MOCK_BOOKS if API fails or book is local only (like id=1,2,3 instead of Mongo ObjectId)
        const foundBook = MOCK_BOOKS.find(b => b.id === parseInt(id) || b.id === id || b._id === id);
        if (foundBook) {
          setBook(foundBook);
        } else {
          setBook({ error: true });
        }
      }
    };
    fetchBookDetails();
  }, [id]);

  if (!book) {
    return (
      <div className="book-details-loading">
        <h2>Loading book details...</h2>
      </div>
    );
  }

  if (book.error) {
    return (
      <div className="book-details-loading">
        <h2>Book not found!</h2>
      </div>
    );
  }

  const handleAdd = () => {
    addToCart(book);
  };

  // Render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} size={18} className="star-icon filled" />);
      } else if (i === fullStars && hasHalfStar) {
        // Simple representation of half star using SVG fill percentage via CSS or similar 
        // We'll just use a partially opaque full star for simplicity here
        stars.push(<Star key={i} size={18} className="star-icon half-filled" />);
      } else {
        stars.push(<Star key={i} size={18} className="star-icon" />);
      }
    }
    return stars;
  };

  return (
    <div className="book-details-page container">
      <button className="back-button" onClick={() => navigate(-1)}>
        <ArrowLeft size={20} />
        <span>Back</span>
      </button>

      <div className="book-details-layout">
        {/* Left Column: Image */}
        <div className="book-details-image-wrapper glass">
          <img src={book.image} alt={book.title} className="book-details-image" />
          <div className="book-badge book-details-badge">Available</div>
        </div>

        {/* Right Column: Info */}
        <div className="book-details-info">
          <h1 className="book-details-title">{book.title}</h1>
          <p className="book-details-author">By {book.author}</p>
          
          <div className="book-details-meta">
            <div className="book-details-rating">
              <div className="stars-container">
                {renderStars(book.rating)}
              </div>
              <span className="rating-value">{book.rating} / 5.0</span>
            </div>
          </div>

          <div className="book-details-price">${book.price.toFixed(2)}</div>
          
          <p className="book-details-description">
            {book.description || "A wonderful read that will captivate your imagination. Dive into this amazing story and discover a world of profound insights."}
          </p>
          
          <div className="book-details-actions">
            <button className="btn-primary add-to-cart-large" onClick={handleAdd}>
              <ShoppingCart size={20} />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section: Look Inside */}
      {book.previewPages && book.previewPages.length > 0 && (
        <div className="book-preview-section">
          <h2 className="section-title">Look Inside</h2>
          <p className="section-subtitle">Sample pages from the book</p>
          <div className="preview-pages-grid">
            {book.previewPages.map((pageImage, index) => (
              <div className="preview-page-card glass" key={index}>
                <img src={pageImage} alt={`Page ${index + 1}`} className="preview-page-image" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetails;

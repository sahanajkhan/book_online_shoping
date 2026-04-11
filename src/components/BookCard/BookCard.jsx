import React, { useContext } from 'react';
import { ShoppingCart } from 'lucide-react';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './BookCard.css';

const BookCard = ({ book }) => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAdd = (e) => {
    e.stopPropagation();
    addToCart(book);
    // Optional: Could add a toast notification here
  };

  const handleCardClick = () => {
    navigate(`/book/${book.id}`);
  };

  return (
    <div className="book-card glass" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <div className="book-image-container">
        <img src={book.image} alt={book.title} className="book-image" />
        <div className="book-badge">Available</div>
      </div>
      <div className="book-info">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">By {book.author}</p>
        <div className="book-bottom">
          <span className="book-price">${book.price.toFixed(2)}</span>
          <button className="book-btn-add" onClick={handleAdd}>
            <ShoppingCart size={16} />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;

import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import { PlusCircle, Loader, CheckCircle } from 'lucide-react';
import './AddBook.css';

const AddBook = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // If user is not logged in or not admin, we would normally redirect.
  // For now, we'll allow it if they just bypass, but in production this should be protected.
  /*
  if (!user || !user.isAdmin) {
    navigate('/');
    return null;
  }
  */

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    price: '',
    description: '',
    image: '',
    rating: '5'
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      await axios.post('http://localhost:5000/api/books', {
        ...formData,
        price: parseFloat(formData.price),
        rating: parseFloat(formData.rating)
      });
      setStatus('success');
      setFormData({
        title: '',
        author: '',
        price: '',
        description: '',
        image: '',
        rating: '5'
      });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div className="add-book-page container animate-fade-in">
      <div className="add-book-header glass">
        <h1>Add New Book</h1>
        <p>Enter the details of the new book to list it in the store.</p>
      </div>

      <div className="add-book-form-container glass">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} required placeholder="e.g. The Pragmatic Programmer" />
          </div>
          <div className="form-group">
            <label>Author</label>
            <input type="text" name="author" value={formData.author} onChange={handleChange} required placeholder="e.g. Andrew Hunt" />
          </div>
          <div className="form-group">
            <label>Price ($)</label>
            <input type="number" step="0.01" name="price" value={formData.price} onChange={handleChange} required placeholder="e.g. 29.99" />
          </div>
          <div className="form-group">
            <label>Image URL</label>
            <input type="url" name="image" value={formData.image} onChange={handleChange} required placeholder="https://..." />
          </div>
          <div className="form-group">
            <label>Rating (1-5)</label>
            <input type="number" step="0.1" min="1" max="5" name="rating" value={formData.rating} onChange={handleChange} required />
          </div>
          <div className="form-group" style={{ gridColumn: '1 / -1' }}>
            <label>Description</label>
            <textarea name="description" rows="5" value={formData.description} onChange={handleChange} required placeholder="Brief description of the book..."></textarea>
          </div>

          <button type="submit" className="btn-primary" disabled={status === 'loading'} style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
            {status === 'loading' ? <Loader size={18} className="spinner" /> : <PlusCircle size={18} />}
            {status === 'loading' ? 'Adding...' : 'Add Book to Store'}
          </button>
          
          {status === 'success' && <p className="success-message" style={{ gridColumn: '1 / -1', color: '#166534', textAlign: 'center', marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}><CheckCircle size={18}/> Book added successfully!</p>}
          {status === 'error' && <p className="error-message" style={{ gridColumn: '1 / -1', color: '#dc2626', textAlign: 'center', marginTop: '1rem' }}>Failed to add book. Make sure the backend server is running.</p>}
        </form>
      </div>
    </div>
  );
};

export default AddBook;

import React from 'react';
import BookCard from '../../components/BookCard/BookCard';
import { Search } from 'lucide-react';
import './Home.css';

// Mock data
const MOCK_BOOKS = [
  {
    id: 1,
    title: "The Design of Everyday Things",
    author: "Don Norman",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    title: "Start With Why",
    author: "Simon Sinek",
    price: 14.50,
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    title: "Atomic Habits",
    author: "James Clear",
    price: 16.00,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 4,
    title: "Clean Code",
    author: "Robert C. Martin",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 5,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    price: 22.00,
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 6,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=600"
  }
];

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section container">
        <div className="hero-content">
          <h1 className="hero-title">Discover Your Next <span className="text-accent">Great Read</span></h1>
          <p className="hero-subtitle">
            Explore thousands of books, from bestsellers to rare finds.
            Buy and sell with ease in our community.
          </p>
          <div className="search-bar glass">
            <Search className="search-icon" size={20} />
            <input type="text" placeholder="Search by title, author, or ISBN..." className="search-input" />
            <button className="btn-primary search-btn">Search</button>
          </div>
        </div>
      </section>

      <section className="books-section container">
        <div className="section-header">
          <h2 className="section-title">Trending Books</h2>
          <button className="view-all-btn">View All</button>
        </div>
        
        <div className="books-grid">
          {MOCK_BOOKS.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

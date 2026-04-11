import React, { useState } from 'react';
import BookCard from '../../components/BookCard/BookCard';
import { Search } from 'lucide-react';
import './Home.css';

import { MOCK_BOOKS } from '../../data/books';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBooks = MOCK_BOOKS.filter(book => 
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            <input 
              type="text" 
              placeholder="Search by title, author, or ISBN..." 
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
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
          {filteredBooks.length > 0 ? (
            filteredBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ))
          ) : (
            <p className="no-results-msg" style={{ gridColumn: "1 / -1", textAlign: "center", padding: "3rem", color: "var(--text-secondary)" }}>
              No books found matching "{searchQuery}"
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;

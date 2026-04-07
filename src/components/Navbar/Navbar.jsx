import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, LogIn, BookOpen } from 'lucide-react';
import { CartContext } from '../../context/CartContext';
import { AuthContext } from '../../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const { getItemCount } = useContext(CartContext);
  const { user } = useContext(AuthContext);

  return (
    <nav className="navbar glass">
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo">
          <BookOpen className="logo-icon" size={28} />
          <span className="logo-text">LuminaBooks</span>
        </Link>
        
        <div className="navbar-links">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/track-order" 
            className={`nav-link ${location.pathname === '/track-order' ? 'active' : ''}`}
          >
            Track Order
          </Link>
        </div>

        <div className="navbar-actions">
          <Link to="/cart" className="icon-btn" aria-label="Cart">
            <ShoppingCart size={20} />
            <span className="cart-badge">{getItemCount()}</span>
          </Link>
          <div className="divider"></div>
          
          {!user ? (
            <Link to="/login" className="btn-outline">
              <LogIn size={18} />
              <span>Login</span>
            </Link>
          ) : (
            <Link to="/profile" className="btn-primary">
              <User size={18} />
              <span>{user.name && user.name.split(' ')[0]}</span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

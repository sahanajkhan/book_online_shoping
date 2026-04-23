import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
<<<<<<< HEAD
import { ShoppingCart, User, LogIn, BookOpen, Package, Truck, Home, Mail, PlusCircle } from 'lucide-react';
=======
import { ShoppingCart, User, LogIn, BookOpen, Package, Truck, Home, Mail, Menu, X } from 'lucide-react';
>>>>>>> 8d5dac75841676e7425d05b927c1b42e3318680f
import { CartContext } from '../../context/CartContext';
import { AuthContext } from '../../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const { getItemCount } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar glass">
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <BookOpen className="logo-icon" size={28} />
          <span className="logo-text">LuminaBooks</span>
        </Link>
        
        <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`} style={{ alignItems: 'center' }}>
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={closeMobileMenu}
            style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}
          >
            <Home size={18} />
            <span>Home</span>
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
            onClick={closeMobileMenu}
            style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}
          >
            <Mail size={18} />
            <span>Contact</span>
          </Link>
          <Link 
            to="/my-orders" 
            className="btn-outline"
            onClick={closeMobileMenu}
            style={{ padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.85rem' }}
          >
            <Package size={16} />
            <span>My Orders</span>
          </Link>
<<<<<<< HEAD
            <Link 
              to="/track-order" 
              className="btn-outline"
              style={{ padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.85rem' }}
            >
              <Truck size={16} />
              <span>Track Order</span>
            </Link>
            {user && user.isAdmin && (
              <Link 
                to="/admin/add-book" 
                className="btn-outline"
                style={{ padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.85rem', borderColor: 'var(--accent-color)', color: 'var(--accent-color)' }}
              >
                <PlusCircle size={16} />
                <span>Add Book</span>
              </Link>
            )}
          </div>
=======
          <Link 
            to="/track-order" 
            className="btn-outline"
            onClick={closeMobileMenu}
            style={{ padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.85rem' }}
          >
            <Truck size={16} />
            <span>Track Order</span>
          </Link>
        </div>
>>>>>>> 8d5dac75841676e7425d05b927c1b42e3318680f

        <div className="navbar-actions">
          <Link to="/cart" className="icon-btn" aria-label="Cart" onClick={closeMobileMenu}>
            <ShoppingCart size={20} />
            <span className="cart-badge">{getItemCount()}</span>
          </Link>
          
          <div className="divider desktop-only"></div>
          
          <div className="desktop-only">
            {!user ? (
              <Link to="/login" className="btn-outline" onClick={closeMobileMenu}>
                <LogIn size={18} />
                <span>Login</span>
              </Link>
            ) : (
              <Link to="/profile" className="btn-primary" onClick={closeMobileMenu}>
                <User size={18} />
                <span>{user.name && user.name.split(' ')[0]}</span>
              </Link>
            )}
          </div>

          <button className="mobile-menu-btn icon-btn" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

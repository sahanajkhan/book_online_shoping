import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { CartContext } from '../../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  if (cart.length === 0) {
    return (
      <div className="cart-empty container">
        <ShoppingBag size={80} className="empty-icon" />
        <h2>Your Cart is Empty</h2>
        <p>Looks like you haven't added any books to your cart yet.</p>
        <Link to="/" className="btn-primary mt-4">Browse Books</Link>
      </div>
    );
  }

  return (
    <div className="cart-page container animate-fade-in">
      <div className="cart-header">
        <h1>Your Shopping Cart</h1>
        <button className="btn-outline clear-btn" onClick={clearCart}>
          <Trash2 size={16} /> Clear Cart
        </button>
      </div>

      <div className="cart-content">
        <div className="cart-items">
          {cart.map(item => (
            <div key={item.id} className="cart-item glass">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p className="cart-item-author">By {item.author}</p>
                <span className="cart-item-price">${item.price.toFixed(2)}</span>
              </div>
              
              <div className="cart-item-actions">
                <div className="quantity-control">
                  <button onClick={() => updateQuantity(item.id, -1)}><Minus size={16}/></button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}><Plus size={16}/></button>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary glass">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${getCartTotal().toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>$4.99</span>
          </div>
          <div className="summary-row">
            <span>Tax (Estimated)</span>
            <span>${(getCartTotal() * 0.08).toFixed(2)}</span>
          </div>
          <div className="summary-divider"></div>
          <div className="summary-row total">
            <span>Total</span>
            <span>${(getCartTotal() + 4.99 + (getCartTotal() * 0.08)).toFixed(2)}</span>
          </div>
          <button className="btn-primary checkout-btn" onClick={handleCheckout}>
            Proceed to Checkout <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

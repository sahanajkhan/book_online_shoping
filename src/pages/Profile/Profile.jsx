import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, LogOut, Settings, Package, Heart, Edit2, ShoppingCart } from 'lucide-react';
import { AuthContext } from '../../context/AuthContext';
import './Profile.css';

const MOCK_ORDERS = [
  { id: 'ORD-849201', date: 'Oct 20, 2026', total: 45.99, status: 'Delivered', items: 2 },
  { id: 'ORD-772110', date: 'Oct 05, 2026', total: 19.99, status: 'Shipped', items: 1 }
];

const MOCK_WISHLIST = [
  { id: 4, title: "Clean Code", author: "Robert C. Martin", price: 34.99, image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=600" },
  { id: 2, title: "Start With Why", author: "Simon Sinek", price: 14.50, image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=600" }
];

const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('account');

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user) return null;

  return (
    <div className="profile-page container animate-fade-in">
      <div className="profile-header glass">
        <div className="profile-avatar">
          <User size={40} className="avatar-icon" />
        </div>
        <div className="profile-info">
          <h1>{user.name}</h1>
          <p>{user.email}</p>
        </div>
        <button className="btn-outline logout-btn" onClick={handleLogout}>
          <LogOut size={16} /> Logout
        </button>
      </div>

      <div className="profile-dashboard">
        {/* Left Sidebar */}
        <div className="dashboard-sidebar glass">
          <button 
            className={`sidebar-link ${activeTab === 'account' ? 'active' : ''}`}
            onClick={() => setActiveTab('account')}
          >
            <User size={18} /> Account Details
          </button>
          <button 
            className={`sidebar-link ${activeTab === 'orders' ? 'active' : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            <Package size={18} /> My Orders
          </button>
          <button 
            className={`sidebar-link ${activeTab === 'wishlist' ? 'active' : ''}`}
            onClick={() => setActiveTab('wishlist')}
          >
            <Heart size={18} /> Wishlist
          </button>
          <button 
            className={`sidebar-link ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            <Settings size={18} /> Settings
          </button>
        </div>

        {/* Right Content */}
        <div className="dashboard-content glass">
          {activeTab === 'account' && (
            <div className="tab-pane animate-fade-in">
              <div className="tab-header">
                <h2>Account Details</h2>
                <button className="btn-outline small"><Edit2 size={14} /> Edit</button>
              </div>
              <div className="details-grid">
                <div className="detail-item">
                  <label>Full Name</label>
                  <div className="detail-value">{user.name}</div>
                </div>
                <div className="detail-item">
                  <label>Email Address</label>
                  <div className="detail-value">{user.email}</div>
                </div>
                <div className="detail-item">
                  <label>Member Since</label>
                  <div className="detail-value">
                    {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="tab-pane animate-fade-in">
              <h2>My Orders</h2>
              {MOCK_ORDERS.length > 0 ? (
                <div className="orders-list">
                  {MOCK_ORDERS.map(order => (
                    <div key={order.id} className="order-card">
                      <div className="order-info">
                        <h3>Order #{order.id}</h3>
                        <p>Placed on {order.date}</p>
                      </div>
                      <div className="order-meta">
                        <span className={`status-badge ${order.status.toLowerCase()}`}>{order.status}</span>
                        <div className="order-total">${order.total.toFixed(2)}</div>
                        <p>{order.items} items</p>
                      </div>
                      <button className="btn-outline small view-order-btn">View Details</button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="empty-state">You have no recent orders.</p>
              )}
            </div>
          )}

          {activeTab === 'wishlist' && (
            <div className="tab-pane animate-fade-in">
              <h2>My Wishlist</h2>
              <div className="wishlist-grid">
                {MOCK_WISHLIST.map(book => (
                  <div key={book.id} className="wishlist-card">
                    <img src={book.image} alt={book.title} />
                    <div className="wishlist-details">
                      <h4>{book.title}</h4>
                      <p>${book.price.toFixed(2)}</p>
                      <button className="btn-primary small"><ShoppingCart size={14}/> Add</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="tab-pane animate-fade-in">
              <h2>Preferences & Settings</h2>
              <div className="settings-list">
                <div className="setting-toggle">
                  <div className="setting-info">
                    <h4>Email Notifications</h4>
                    <p>Receive order updates and promotions via email.</p>
                  </div>
                  <label className="switch">
                    <input type="checkbox" defaultChecked />
                    <span className="slider round"></span>
                  </label>
                </div>
                <div className="setting-toggle">
                  <div className="setting-info">
                    <h4>Dark Mode</h4>
                    <p>Change the application theme to dark mode.</p>
                  </div>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                  </label>
                </div>
                <div className="setting-toggle">
                  <div className="setting-info">
                    <h4>Two-Factor Authentication</h4>
                    <p>Secure your account with 2FA.</p>
                  </div>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;

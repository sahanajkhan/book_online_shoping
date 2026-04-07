import React, { useState } from 'react';
import { Package, Calendar, MapPin, ChevronRight, CheckCircle, CreditCard, Clock } from 'lucide-react';
import './MyOrders.css';

const MOCK_ORDERS = [
  {
    id: 'ORD-849201',
    date: 'Oct 20, 2026',
    status: 'In Transit',
    total: 85.97,
    items: [
      { title: 'The Design of Everyday Things', author: 'Don Norman', price: 35.99, image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=200' },
      { title: 'Clean Code', author: 'Robert C. Martin', price: 49.98, image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=200' }
    ],
    address: '123 Tech Street, Silicon Valley, CA'
  },
  {
    id: 'ORD-738192',
    date: 'Sep 15, 2026',
    status: 'Delivered',
    total: 29.99,
    items: [
      { title: 'Atomic Habits', author: 'James Clear', price: 29.99, image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=200' }
    ],
    address: '123 Tech Street, Silicon Valley, CA'
  }
];

const MyOrders = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Delivered': return <CheckCircle className="status-icon success" size={18} />;
      case 'In Transit': return <Clock className="status-icon warning" size={18} />;
      default: return <Package className="status-icon" size={18} />;
    }
  };

  return (
    <div className="my-orders-page container animate-fade-in">
      <div className="orders-header">
        <h1>My Orders</h1>
        <p>View and manage your recent purchases</p>
      </div>

      <div className="orders-layout">
        <div className="orders-list">
          {MOCK_ORDERS.map((order) => (
            <div 
              key={order.id} 
              className={`order-card glass ${selectedOrder?.id === order.id ? 'selected' : ''}`}
              onClick={() => setSelectedOrder(order)}
            >
              <div className="order-card-header">
                <div>
                  <h3>Order <span>#{order.id}</span></h3>
                  <p className="order-date"><Calendar size={14} /> {order.date}</p>
                </div>
                <div className={`order-status ${order.status.toLowerCase().replace(' ', '-')}`}>
                  {getStatusIcon(order.status)}
                  <span>{order.status}</span>
                </div>
              </div>
              <div className="order-card-footer">
                <span className="order-total">${order.total.toFixed(2)}</span>
                <button className="btn-details">
                  View Details <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="order-details-pane">
          {selectedOrder ? (
            <div className="order-details-content glass animate-slide-up">
              <h2>Order Details</h2>
              <p className="details-id">#{selectedOrder.id}</p>

              <div className="details-section">
                <h3>Items ({selectedOrder.items.length})</h3>
                <div className="details-items">
                  {selectedOrder.items.map((item, idx) => (
                    <div key={idx} className="details-item">
                      <img src={item.image} alt={item.title} />
                      <div className="item-info">
                        <h4>{item.title}</h4>
                        <p>{item.author}</p>
                      </div>
                      <span className="item-price">${item.price.toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="details-section">
                <h3>Shipping Info</h3>
                <div className="info-box">
                  <MapPin size={18} className="text-secondary" />
                  <span>{selectedOrder.address}</span>
                </div>
              </div>
              
              <div className="details-section">
                <h3>Payment Info</h3>
                <div className="info-box">
                  <CreditCard size={18} className="text-secondary" />
                  <span>Paid via Credit Card ending in **** 4242</span>
                </div>
              </div>

              <div className="details-summary">
                <div className="summary-row total">
                  <span>Total Paid</span>
                  <span>${selectedOrder.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="empty-details glass">
              <Package size={48} className="text-secondary" />
              <h3>Select an order</h3>
              <p>Click on an order from the list to view its complete details.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;

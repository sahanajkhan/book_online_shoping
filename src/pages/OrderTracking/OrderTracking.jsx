import React, { useState } from 'react';
import { PackageSearch, Truck, CheckCircle, Clock } from 'lucide-react';
import './OrderTracking.css';

const OrderTracking = () => {
  const [orderId, setOrderId] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [trackingData, setTrackingData] = useState(null);

  const handleTrack = (e) => {
    e.preventDefault();
    if (!orderId.trim()) return;
    
    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      setTrackingData({
        status: 'In Transit',
        expectedDate: 'Oct 24, 2026',
        items: ['The Design of Everyday Things', 'Clean Code'],
        steps: [
          { status: 'Order Placed', date: 'Oct 20, 2026', completed: true },
          { status: 'Processing', date: 'Oct 21, 2026', completed: true },
          { status: 'Shipped', date: 'Oct 22, 2026', completed: true },
          { status: 'Out for Delivery', date: 'Pending', completed: false },
          { status: 'Delivered', date: 'Pending', completed: false },
        ]
      });
      setIsSearching(false);
    }, 1500);
  };

  return (
    <div className="tracking-page container">
      <div className="tracking-header">
        <h1 className="tracking-title">Track Your Order</h1>
        <p className="tracking-subtitle">Enter your order ID below to see the current status of your shipment.</p>
      </div>

      <div className="tracking-search-container glass">
        <form onSubmit={handleTrack} className="tracking-form">
          <PackageSearch className="tracking-icon" size={24} />
          <input 
            type="text" 
            placeholder="e.g. LUM-849201" 
            className="tracking-input"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
          />
          <button type="submit" className="btn-primary tracking-btn" disabled={isSearching}>
            {isSearching ? 'Searching...' : 'Track'}
          </button>
        </form>
      </div>

      {trackingData && (
        <div className="tracking-results animate-fade-in">
          <div className="status-card glass">
            <div className="status-header">
              <div className="status-info">
                <h2>Status: <span className="text-accent">{trackingData.status}</span></h2>
                <p>Expected Delivery: <strong>{trackingData.expectedDate}</strong></p>
              </div>
              <Truck size={40} className="status-truck text-accent" />
            </div>

            <div className="stepper">
              {trackingData.steps.map((step, index) => (
                <div key={index} className={`step ${step.completed ? 'completed' : ''}`}>
                  <div className="step-icon">
                    {step.completed ? <CheckCircle size={20} /> : <Clock size={20} />}
                  </div>
                  <div className="step-content">
                    <h4>{step.status}</h4>
                    <span>{step.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderTracking;

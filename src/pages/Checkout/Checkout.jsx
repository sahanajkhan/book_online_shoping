import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, CreditCard, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { CartContext } from '../../context/CartContext';
import './Checkout.css';

const Checkout = () => {
  const { cart, getCartTotal, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [shippingDetails, setShippingDetails] = useState({ fullName: '', address: '', city: '', zip: '' });
  const [paymentMethod, setPaymentMethod] = useState('card');
  
  // Quick safety check: if cart is empty, do not allow checkout to proceed
  if (cart.length === 0 && step === 1) {
    navigate('/cart');
    return null;
  }

  const handleNextStep = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    const newOrder = {
      id: `ORD-${Math.floor(100000 + Math.random() * 900000)}`,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      total: totalAmount,
      status: 'Processing',
      items: cart.reduce((acc, item) => acc + item.quantity, 0)
    };

    clearCart();
    navigate('/profile', { state: { orderPlaced: true, activeTab: 'orders', newOrder } });
  };

  const totalAmount = getCartTotal() + 4.99 + (getCartTotal() * 0.08);

  return (
    <div className="checkout-page container animate-fade-in">
      <div className="checkout-progress glass">
        <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>
          <div className="step-icon"><MapPin size={20} /></div>
          <span>Shipping Location</span>
        </div>
        <div className="progress-line"></div>
        <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>
          <div className="step-icon"><CreditCard size={20} /></div>
          <span>Payment Details</span>
        </div>
        <div className="progress-line"></div>
        <div className={`progress-step ${step >= 3 ? 'active' : ''}`}>
          <div className="step-icon"><CheckCircle size={20} /></div>
          <span>Order Complete</span>
        </div>
      </div>

      <div className="checkout-content animate-fade-in">
        {step === 1 && (
          <div className="checkout-form glass">
            <h2>Delivery Address</h2>
            <form onSubmit={handleNextStep}>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" required value={shippingDetails.fullName} onChange={e => setShippingDetails({...shippingDetails, fullName: e.target.value})} placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label>Street Address</label>
                <input type="text" required value={shippingDetails.address} onChange={e => setShippingDetails({...shippingDetails, address: e.target.value})} placeholder="123 Bookworm Lane" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>City</label>
                  <input type="text" required value={shippingDetails.city} onChange={e => setShippingDetails({...shippingDetails, city: e.target.value})} placeholder="Library City" />
                </div>
                <div className="form-group">
                  <label>ZIP Code</label>
                  <input type="text" required value={shippingDetails.zip} onChange={e => setShippingDetails({...shippingDetails, zip: e.target.value})} placeholder="90210" />
                </div>
              </div>
              <div className="checkout-actions">
                <button type="button" className="btn-outline" onClick={() => navigate('/cart')}><ArrowLeft size={16}/> Back to Cart</button>
                <button type="submit" className="btn-primary">Continue to Payment <ArrowRight size={16}/></button>
              </div>
            </form>
          </div>
        )}

        {step === 2 && (
          <div className="checkout-form glass animate-fade-in">
            <h2>Payment Method</h2>
            <form onSubmit={handlePlaceOrder}>
              <div className="payment-options">
                <label className={`payment-option ${paymentMethod === 'card' ? 'selected' : ''}`}>
                  <input type="radio" name="payment" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} />
                  <CreditCard size={20} />
                  <span>Credit / Debit Card</span>
                </label>
                <label className={`payment-option ${paymentMethod === 'cod' ? 'selected' : ''}`}>
                  <input type="radio" name="payment" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} />
                  <MapPin size={20} />
                  <span>Cash on Delivery</span>
                </label>
              </div>
              
              {paymentMethod === 'card' && (
                <div className="card-details animate-fade-in">
                  <div className="form-group mt-4" style={{marginTop: '2rem'}}>
                    <label>Card Number</label>
                    <input type="text" placeholder="1234 5678 9101 1121" required />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Expiry Date</label>
                      <input type="text" placeholder="MM/YY" required />
                    </div>
                    <div className="form-group">
                      <label>CVV / CVC</label>
                      <input type="text" placeholder="123" required />
                    </div>
                  </div>
                </div>
              )}

              <div className="order-summary-mini">
                <h3>Total to Pay: <span>${totalAmount.toFixed(2)}</span></h3>
                <p>Deliver to: {shippingDetails.fullName} — {shippingDetails.address}, {shippingDetails.city}</p>
              </div>

              <div className="checkout-actions">
                <button type="button" className="btn-outline" onClick={() => setStep(1)}><ArrowLeft size={16}/> Back to Shipping</button>
                <button type="submit" className="btn-primary"><CheckCircle size={16}/> Place Order</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;

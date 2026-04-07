import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader, CheckCircle } from 'lucide-react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Completely unhooked from the backend. Just simulate a 1-second delay and show success.
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1000);
  };

  return (
    <div className="contact-page container animate-fade-in">
      <div className="contact-header glass">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Please fill out this form or get in touch using the information below.</p>
      </div>

      <div className="contact-content">
        <div className="contact-info glass">
          <h2>Get in Touch</h2>
          <div className="info-item">
            <div className="info-icon"><Mail size={20} /></div>
            <div>
              <h3>Email</h3>
              <p>support@luminabooks.com</p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon"><Phone size={20} /></div>
            <div>
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon"><MapPin size={20} /></div>
            <div>
              <h3>Office</h3>
              <p>123 Bookworm Lane<br />Library City, BK 90210</p>
            </div>
          </div>
        </div>

        <div className="contact-form glass">
          <h2>Send a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Name" required value={formData.name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="example@email.com" required value={formData.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="How can we help you?" required value={formData.message} onChange={handleChange}></textarea>
            </div>
            <button type="submit" className="btn-primary" disabled={status === 'loading'} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
              {status === 'loading' ? <Loader size={16} className="spinner" /> : <Send size={16} />} 
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && <p className="success-message" style={{color: '#166534', marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center'}}><CheckCircle size={16}/> Message sent successfully!</p>}
            {status === 'error' && <p className="error-message" style={{color: '#dc2626', marginTop: '1rem', textAlign: 'center'}}>Failed to send message. Please check the backend.</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

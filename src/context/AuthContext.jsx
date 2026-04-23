import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // If token exists, load user from local storage (or optionally verify with API)
    if (token) {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
    setLoading(false);
  }, [token]);

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

  const login = async (email, password) => {
    // --- PRESENTATION BACKUP: Hardcoded Dummy User ---
    if (email === 'demo@user.com' && password === 'demo123') {
      const demoUser = { _id: 'demo123', name: 'Demo Presenter', email: 'demo@user.com' };
      const demoToken = 'fake-demo-jwt-token-for-presentation';
      
      localStorage.setItem('token', demoToken);
      localStorage.setItem('user', JSON.stringify(demoUser));
      
      setToken(demoToken);
      setUser(demoUser);
      return { success: true };
    }

    try {
      const res = await axios.post(`${API_URL}/auth/login`, { email, password });
      const { token, ...userData } = res.data;
      
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(userData));
      
      setToken(token);
      setUser(userData);
      return { success: true };
    } catch (error) {
      // --- EMERGENCY PRESENTATION FALLBACK ---
      // If the backend fails completely during the presentation, log them in anyway
      // to ensure the presentation can continue.
      if (error.message === 'Network Error' || !error.response) {
        console.warn("Backend unavailable. Activating emergency demo login to save presentation!");
        const emergencyUser = { _id: 'emergency', name: 'Presenter (Offline Mode)', email: email };
        const emergencyToken = 'offline-emergency-token';
        
        localStorage.setItem('token', emergencyToken);
        localStorage.setItem('user', JSON.stringify(emergencyUser));
        
        setToken(emergencyToken);
        setUser(emergencyUser);
        return { success: true };
      }
      
      return { success: false, message: error.response?.data?.message || 'Login failed' };
    }
  };

  const register = async (name, email, password) => {
    try {
      const res = await axios.post(`${API_URL}/auth/register`, { name, email, password });
      const { token, ...userData } = res.data;
      
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(userData));
      
      setToken(token);
      setUser(userData);
      return { success: true };
    } catch (error) {
      // --- EMERGENCY PRESENTATION FALLBACK ---
      if (error.message === 'Network Error' || !error.response) {
        console.warn("Backend unavailable. Activating emergency demo registration!");
        const emergencyUser = { _id: 'emergency', name: name, email: email };
        const emergencyToken = 'offline-emergency-token';
        
        localStorage.setItem('token', emergencyToken);
        localStorage.setItem('user', JSON.stringify(emergencyUser));
        
        setToken(emergencyToken);
        setUser(emergencyUser);
        return { success: true };
      }
      
      return { success: false, message: error.response?.data?.message || 'Registration failed' };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

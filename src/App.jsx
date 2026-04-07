import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import OrderTracking from './pages/OrderTracking/OrderTracking';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Cart from './pages/Cart/Cart';
import MyOrders from './pages/MyOrders/MyOrders';

function App() {
  const { user, loading } = React.useContext(AuthContext);

  if (loading) return null; // Avoid flicker during load

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/track-order" element={<OrderTracking />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/my-orders" element={<MyOrders />} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/profile" />} />
            <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

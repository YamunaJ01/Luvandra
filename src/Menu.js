import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import NewIn from './NewIn';
import PartyWear from './PartyWear'; 
import CasualWear from './CasualWear'; 
import ContactUs from './ContactUs';
import './Menu.css';
import logo from './images/logo.png';
import slider1 from './images/slider1.jpg';
import slider2 from './images/slider2.jpg';
import ProductGrid from './ProductGrid';
import Cart from './Cart'; 
import TrackOrder from './TrackOrder';
import Help from './Help';
import Checkout from './Checkout';

function Menu() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="main-container">
      {/* Top Navigation Bar */}
      <nav className="top-navbar">
        <button className="menu-icon" onClick={() => setShowSidebar(!showSidebar)}>☰</button>
        <div className="logo-section">
          <img src={logo} alt="Luvandra Logo" className="logo-img" />
          <span className="brand-name">Luvandra</span>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/new-in">New In</Link>
          <Link to="/casual-wear">Casual Wear</Link>
          <Link to="/party-wear">Party Wear</Link>
          <Link to="/contact-us">Contact Us</Link>
        </div>
        <div className="icon-links">
          <Link to="/login">👤</Link>
          <Link to="/cart">🛒</Link>
        </div>
      </nav>

      {/* Sidebar */}
      {showSidebar && (
        <aside className="sidebar">
          <Link to="/cart">My Cart</Link>
          <Link to="/track">Track Order</Link>
          <Link to="/checkout">Checkout</Link>
          <Link to="/help">Help</Link>
          <Link to="/login">Login</Link>
        </aside>
      )}

      {/* Image Slider */}
      <div className="slider-container">
        <img
          src={slider1}
          alt="Slider 1"
          className="slider-img"
          onMouseEnter={e => e.currentTarget.src = slider2}
          onMouseLeave={e => e.currentTarget.src = slider1}
        />
      </div>

      {/* Routing Section */}
      <div className="content">
        <Routes>
          <Route path="/" element={<ProductGrid />} />
          <Route path="/login" element={<Login />} />
          <Route path="/new-in" element={<NewIn />} />
          <Route path="/casual-wear" element={<CasualWear />} />
          <Route path="/party-wear" element={<PartyWear />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/track" element={<TrackOrder />} />
          <Route path="/help" element={<Help />} />
          <Route path="/checkout" element={<Checkout />} />

        </Routes>
      </div>

      {/* Updated Footer with 4 Columns */}
      <footer className="footer">
        <div className="footer-columns">
          <div className="footer-column">
            <h4>Contact</h4>
            <p>Coimbatore: 8A, Lokamanya Street East, RS Puram, 641002</p>
            <p>Madurai: Plot 432, 9th Main Rd, KK Nagar, 625020</p>
            <p>Email: contact@luvandra.com</p>
            <p>Phone: +91 96009 73736</p>
          </div>
          <div className="footer-column">
            <h4>Information</h4>
            <p>Return Policy</p>
            <p>Refund/Cancellation</p>
            <p>Privacy Policy</p>
            <p>Shipping Policy</p>
            <p>Terms of Use</p>
          </div>
          <div className="footer-column">
            <h4>Explore</h4>
            <p>New Arrivals</p>
            <p>Casual Wear</p>
            <p>Party Wear</p>
            <p>Accessories</p>
            <p>Plus Size</p>
          </div>
          <div className="footer-column">
            <h4>Follow Us</h4>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>YouTube</p>
            <p>Twitter</p>
            <p>LinkedIn</p>
          </div>
        </div>
        <p className="footer-bottom">© 2025 Luvandra Boutique | All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Menu;

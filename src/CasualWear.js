// CasualWear.js
import React from 'react';
import './Menu.css';
import { useNavigate } from 'react-router-dom';

import w1 from './images/w1.jpg';
import w2 from './images/w2.jpg';
import w3 from './images/w3.jpg';
import w4 from './images/w4.jpg';
import w5 from './images/w5.jpg';
import w6 from './images/w6.jpg';

function CasualWear() {
  const navigate = useNavigate();

  const images = [
    { src: w1, price: "₹1499" },
    { src: w2, price: "₹1599" },
    { src: w3, price: "₹1699" },
    { src: w4, price: "₹1799" },
    { src: w5, price: "₹1899" },
    { src: w6, price: "₹1999" },
  ];

  const handleBuy = () => {
    navigate('/cart');
  };

  return (
    <div className="page-container">
      <h2 className="section-title">Casual Wear Collection</h2>

      <div className="image-grid">
        {images.map((item, index) => (
          <div key={index} className="image-card">
            <img src={item.src} alt={`casual-${index + 1}`} className="grid-image" />
            <p className="price">{item.price}</p>
            <button className="buy-button" onClick={handleBuy}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CasualWear;

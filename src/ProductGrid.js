import React from 'react';

import E1 from './images/E1.jpg';
import E2 from './images/E2.jpg';
import E3 from './images/E3.jpg';
import E4 from './images/E4.jpg';

import MA1 from './images/MA1.jpg';
import MA2 from './images/MA2.jpg';
import MA3 from './images/MA3.jpg';
import MA4 from './images/MA4.jpg';

import B1 from './images/B1.jpg';
import B2 from './images/B2.jpg';
import B3 from './images/B3.jpg';
import B4 from './images/B4.jpg';

import M1 from './images/M1.jpg';
import M2 from './images/M2.jpg';
import M3 from './images/M3.jpg';
import M4 from './images/M4.jpg';

import S1 from './images/S1.jpg';
import S2 from './images/S2.jpg';
import S3 from './images/S3.jpg';
import S4 from './images/S4.jpg';

import './ProductGrid.css';

export default function ProductGrid() {
  const renderCard = (src, title, price) => (
    <div className="product-card">
      <img src={src} alt={title} />
      <h3>{title}</h3>
      <p className="price">₹{price}</p>
      <button
        className="buy-button"
        onClick={() => window.confirm(`Do you want to buy ${title} for ₹${price}?`)}
      >
        Buy Now
      </button>
    </div>
  );

  return (
    <div className="product-section">
      <h2>Ethnic Dress Collection</h2>
      <div className="product-grid-4">
        {renderCard(E1, 'Ethnic Dress', 1200)}
        {renderCard(E2, 'Ethnic Dress', 3000)}
        {renderCard(E3, 'Ethnic Dress', 2000)}
        {renderCard(E4, 'Ethnic Dress', 2800)}
      </div>

      <h2>Maxi Dress Collection</h2>
      <div className="product-grid-4">
        {renderCard(MA1, 'Maxi Dress', 600)}
        {renderCard(MA2, 'Maxi Dress', 750)}
        {renderCard(MA3, 'Maxi Dress', 800)}
        {renderCard(MA4, 'Maxi Dress', 850)}
      </div>

      <h2>Beach Dress Collection</h2>
      <div className="product-grid-4">
        {renderCard(B1, 'Beach Dress', 800)}
        {renderCard(B2, 'Beach Dress', 800)}
        {renderCard(B3, 'Beach Dress', 900)}
        {renderCard(B4, 'Beach Dress', 1000)}
      </div>

      <h2>Modern Dress Collection</h2>
      <div className="product-grid-4">
        {renderCard(M1, 'Modern Dress', 950)}
        {renderCard(M2, 'Modern Dress', 980)}
        {renderCard(M3, 'Modern Dress', 1000)}
        {renderCard(M4, 'Modern Dress', 1100)}
      </div>

      <h2>Summer Dress Collection</h2>
      <div className="product-grid-4">
        {renderCard(S1, 'Summer Dress', 680)}
        {renderCard(S2, 'Summer Dress', 640)}
        {renderCard(S3, 'Summer Dress', 600)}
        {renderCard(S4, 'Summer Dress', 620)}
      </div>
    </div>
  );
}

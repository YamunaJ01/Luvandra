import React from 'react';
import './PartyWear.css';

import q1 from './images/q1.jpg';
import q2 from './images/q2.jpg';
import q3 from './images/q3.jpg';
import q4 from './images/q4.jpg';
import q5 from './images/q5.jpg';
import q6 from './images/q6.jpg';
import q7 from './images/q7.jpg';
import q8 from './images/q8.jpg';
import q9 from './images/q9.jpg';
import l1 from './images/l1.jpg';
import l2 from './images/l2.jpg';
import l3 from './images/l3.jpg';
import g1 from './images/g1.jpg';
import g2 from './images/g2.jpg';
import g3 from './images/g3.jpg';
import g4 from './images/g4.jpg';
import g5 from './images/g5.jpg';
import g6 from './images/g6.jpg';
import g7 from './images/g7.jpg';
import g8 from './images/g8.jpg';
import g9 from './images/g9.jpg';

function PartyWear() {
  const handleBuy = (item) => {
    alert(`Thank you for showing interest in ${item}. Our team will contact you shortly!`);
  };

  const renderGrid = (title, items) => (
    <>
      <h2 className="section-heading">{title}</h2>
      <div className="image-grid">
        {items.map(({ src, label, price }, idx) => (
          <div key={idx} className="image-item">
            <img src={src} alt={label} />
            <p className="price">{price}</p>
            <button onClick={() => handleBuy(label)}>Buy Now</button>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className="party-container">
      {renderGrid("Ethnic Party Wear", [
        { src: q1, label: 'Ethnic-1', price: '₹1,999' },
        { src: q2, label: 'Ethnic-2', price: '₹2,499' },
        { src: q3, label: 'Ethnic-3', price: '₹2,799' },
      ])}

      {renderGrid("Modern Party Wear", [
        { src: q4, label: 'Modern-1', price: '₹3,199' },
        { src: q5, label: 'Modern-2', price: '₹2,299' },
        { src: q6, label: 'Modern-3', price: '₹1,899' },
        { src: q7, label: 'Modern-4', price: '₹2,499' },
        { src: q8, label: 'Modern-5', price: '₹2,299' },
        { src: q9, label: 'Modern-6', price: '₹2,799' },
      ])}

      {renderGrid("Lehenga Collection", [
        { src: l1, label: 'Lehenga-1', price: '₹3,999' },
        { src: l2, label: 'Lehenga-2', price: '₹4,499' },
        { src: l3, label: 'Lehenga-3', price: '₹3,699' },
      ])}

      {renderGrid("Fancy Gown Collection", [
        { src: g1, label: 'Gown-1', price: '₹2,499' },
        { src: g2, label: 'Gown-2', price: '₹2,599' },
        { src: g3, label: 'Gown-3', price: '₹2,999' },
        { src: g4, label: 'Gown-4', price: '₹2,299' },
        { src: g5, label: 'Gown-5', price: '₹2,399' },
        { src: g6, label: 'Gown-6', price: '₹2,699' },
        { src: g7, label: 'Gown-7', price: '₹2,899' },
        { src: g8, label: 'Gown-8', price: '₹3,099' },
        { src: g9, label: 'Gown-9', price: '₹3,299' },
      ])}
    </div>
  );
}

export default PartyWear;

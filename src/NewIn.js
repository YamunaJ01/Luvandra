import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Menu.css'; // Or use NewIn.css if you separated the styles

// Sharara images
import r1 from './images/r1.jpg';
import r2 from './images/r2.jpg';
import r3 from './images/r3.jpg';
import r4 from './images/r4.jpg';
import r5 from './images/r5.jpg';
import r6 from './images/r6.jpg';

// Regular "New In" collection images
import i1 from './images/i1.jpg';
import i2 from './images/i2.jpg';
import i3 from './images/i3.jpg';
import i4 from './images/i4.jpg';
import i5 from './images/i5.jpg';
import i6 from './images/i6.jpg';

function NewIn() {
  const navigate = useNavigate();

  const shararaImages = [r1, r2, r3, r4, r5, r6];
  const shararaPrices = [2599, 2799, 2999, 2699, 2899, 3099];

  const newInImages = [i1, i2, i3, i4, i5, i6];
  const newInPrices = [1999, 2099, 2199, 2299, 2399, 2499];

  // When "Buy Now" is clicked, navigate to /cart
  const handleBuyNow = (itemName) => {
    alert(`🛍️ ${itemName} added to cart!`);
    navigate('/cart');
  };

  return (
    <div className="page-container">
      {/* Sharara Section */}
      <h2 className="section-heading">Sharara Collection</h2>
      <div className="product-grid-3">
        {shararaImages.map((img, idx) => (
          <div className="product-card" key={idx}>
            <img src={img} alt={`Sharara ${idx + 1}`} className="grid-image" />
            <p className="price">₹{shararaPrices[idx]}</p>
            <button
              className="buy-button"
              onClick={() => handleBuyNow(`Sharara ${idx + 1}`)}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>

      {/* Main New In Collection */}
      <h2 className="section-heading">New In Collection</h2>
      <div className="product-grid-3">
        {newInImages.map((img, idx) => (
          <div className="product-card" key={idx}>
            <img src={img} alt={`Product ${idx + 1}`} className="grid-image" />
            <p className="price">₹{newInPrices[idx]}</p>
            <button
              className="buy-button"
              onClick={() => handleBuyNow(`New In ${idx + 1}`)}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewIn;

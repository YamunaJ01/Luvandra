// TrackOrder.js
import React from 'react';

function TrackOrder() {
  return (
    <div className="page-container">
      <h2 className="section-title">Track Your Order</h2>
      <p>Enter your order ID to track the shipping status:</p>
      <input type="text" placeholder="Order ID" className="input-box" />
      <button className="buy-button">Track</button>
    </div>
  );
}

export default TrackOrder;

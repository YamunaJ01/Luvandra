// Checkout.js
import React from 'react';

function Checkout() {
  return (
    <div className="page-container">
      <h2 className="section-title">Checkout</h2>
      <p>Please fill in your shipping and payment details below:</p>

      <form className="checkout-form">
        <input type="text" placeholder="Full Name" className="input-box" />
        <input type="text" placeholder="Address" className="input-box" />
        <input type="text" placeholder="City" className="input-box" />
        <input type="text" placeholder="Postal Code" className="input-box" />
        <input type="text" placeholder="Card Number" className="input-box" />
        <input type="text" placeholder="Expiry Date" className="input-box" />
        <input type="text" placeholder="CVV" className="input-box" />
        <button type="submit" className="buy-button">Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;

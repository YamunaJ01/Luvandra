// Cart.js
import React, { useState } from 'react';
import './Cart.css'; // Create this file

import w1 from './images/w1.jpg';
import w2 from './images/w2.jpg';

function Cart() {
  // Sample cart items
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Casual Dress 1', price: 1499, quantity: 1, img: w1 },
    { id: 2, name: 'Casual Dress 2', price: 1599, quantity: 1, img: w2 },
  ]);

  const updateQuantity = (id, quantity) => {
    const updated = cartItems.map(item =>
      item.id === id ? { ...item, quantity: parseInt(quantity) } : item
    );
    setCartItems(updated);
  };

  const removeItem = (id) => {
    const filtered = cartItems.filter(item => item.id !== id);
    setCartItems(filtered);
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty">Your cart is empty 🛒</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt={item.name} />
                <div className="cart-details">
                  <h4>{item.name}</h4>
                  <p>Price: ₹{item.price}</p>
                  <label>
                    Qty:
                    <select
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, e.target.value)}
                    >
                      {[1, 2, 3, 4, 5].map(q => (
                        <option key={q} value={q}>{q}</option>
                      ))}
                    </select>
                  </label>
                  <button onClick={() => removeItem(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total: ₹{totalPrice}</h3>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;

// src/ContactUs.js
import React from 'react';
import './ContactUs.css';




function ContactUs() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="contact-content">
        <form className="contact-form">
          <label>Name</label>
          <input type="text" placeholder="Enter your name" required />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Phone Number</label>
          <input type="tel" placeholder="Enter your phone number" required />

          <label>Comments</label>
          <textarea rows="5" placeholder="Enter your message" required />

          <button type="submit">Send</button>
        </form>

        <div className="contact-info">
          <h4>WORK TIME</h4>
          <p>7 Days a Week</p>
          <p>from 10.00 AM to 6.00 PM</p>
        </div>
      </div>

      <div className="map-container">
        <iframe
          title="luvandra-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.300025832432!2d76.94995267440683!3d10.85106215760432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8594f7b64836b%3A0x46e36f0b8cb0cf7b!2sRS%20Puram%2C%20Coimbatore!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactUs;

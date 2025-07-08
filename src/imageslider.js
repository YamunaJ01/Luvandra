import React from 'react';
import './ImageSlider.css';
import slide1 from './assets/slide1.jpg';
import slide2 from './assets/slide2.jpg';
import slide3 from './assets/slide3.jpg';

const slides = [slide1, slide2, slide3];

function ImageSlider() {
  return (
    <div className="slider">
      {slides.map((src, idx) => (
        <img src={src} alt={`slide${idx + 1}`} key={idx} className="slide-img" />
      ))}
    </div>
  );
}

export default ImageSlider;

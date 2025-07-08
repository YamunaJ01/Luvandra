import React, { useEffect, useRef } from 'react';
import './Slider.css';

const images = [
  '/slider1.jpg',
  '/slider2.jpg',
  '/slider3.jpg',
];

function Slider() {
  const idx = useRef(0);
  const imgRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      idx.current = (idx.current + 1) % images.length;
      imgRef.current.src = images[idx.current];
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <img ref={imgRef} src={images[0]} alt="Luvandra banner" />
    </div>
  );
}

export default Slider;

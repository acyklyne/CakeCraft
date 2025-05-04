import React from 'react';
import '../styles/Sustainability.css';
import sustainabilityImage from '../assets/sustainability.jpg';

function Sustainability() {
  return (
    <div id="sustainability" className="sustainability-container">
      <img src={sustainabilityImage} alt="Sustainability" className="sustainability-image" />
      <div className="sustainability-text-box">
        <p>Stylish sustainability in design promotes</p>
        <p>creative choices for a greater future of cakes.</p>
      </div>
    </div>
  );
}

export default Sustainability;
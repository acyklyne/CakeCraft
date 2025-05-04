import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import CakeDesigner from './CakeDesigner';

function MainSection({ onAddToCart }) {
  const [showDesigner, setShowDesigner] = useState(false);

  return (
    <section id="home" className="main-section">
      <div className="overlay">
        <div className="content-wrapper">
          <p className="slogan">
            Elegance in simplicity, <br />
            Earth's harmony
          </p>
        </div>
        <button 
          className="design-btn" 
          onClick={() => setShowDesigner(true)}
          aria-label="Open cake designer"
        >
          <FaPlus className="plus-icon" /> Make Your Design
        </button>
        {showDesigner && (
          <CakeDesigner 
            onClose={() => setShowDesigner(false)}
            onAddToCart={onAddToCart}
          />
        )}
      </div>
    </section>
  );
}

export default MainSection;
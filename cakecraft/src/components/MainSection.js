import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import CakeDesigner from './CakeDesigner';

const MainSection = () => {
  const [showDesigner, setShowDesigner] = useState(false);

  const handleDesignClick = () => {
    setShowDesigner(!showDesigner);
  };

  return (
    <section id="home" className="main-section">
      <div className="overlay">
        <div className="content-wrapper">
          <p className="slogan">
            Elegance in simplicity, <br />
            Earth's harmony
          </p>
        </div>
        <button className="design-btn" onClick={handleDesignClick}>
          <FaPlus className="plus-icon" /> Make Your Design
        </button>
        {showDesigner && <CakeDesigner onClose={() => setShowDesigner(false)} />}
      </div>
    </section>
  );
};

export default MainSection;
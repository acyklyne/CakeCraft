import React from 'react';
import { FaPlus } from 'react-icons/fa';

function MainSection() {
  return (
    <section id="home"className="main-section">
      <div className="overlay">
        <div className="content-wrapper">
          <p className="slogan">
            Elegance in simplicity, <br />
            Earth's harmony
          </p>
        </div>
        <button className="design-btn">
          <FaPlus className="plus-icon" /> Make Your Design
        </button>
      </div>
    </section>
  );
}

export default MainSection;
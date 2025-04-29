import React from 'react';
import { FaSearch, FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa';

function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <h1 className="site-title">CakeCraft</h1>
        <p className="subtitle">Where Technology Meets Cake Creation</p>
      </div>

      <div className="nav-middle">
        <button className="nav-btn" onClick={() => scrollToSection('home')}>Home</button>
        <button className="nav-btn" onClick={() => scrollToSection('weeks-best')}>Week's Best</button>
        <button className="nav-btn">Pre-Designed</button>
        <button className="nav-btn">Bulk Order</button>
        <button className="nav-btn">Sustainability</button>
      </div>

      <div className="nav-right">
        <button className="icon-btn" aria-label="Search">
          <FaSearch />
        </button>
        <button className="icon-btn" aria-label="Profile">
          <FaUser />
        </button>
        <button className="icon-btn" aria-label="Favorites">
          <FaHeart />
        </button>
        <button className="icon-btn" aria-label="Cart">
          <FaShoppingCart />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

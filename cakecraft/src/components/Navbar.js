import React from 'react';
import { FaSearch, FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa';

function Navbar({ cartItems = [], favorites = [], onCartClick, onFavoritesClick }) {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <h1 className="site-title">CakeCraft</h1>
        <p className="subtitle">where technology meets cake creation</p>
      </div>

      <div className="nav-middle">
        <button className="nav-btn" onClick={() => scrollToSection('home')}>Home</button>
        <button className="nav-btn" onClick={() => scrollToSection('weeks-best')}>Week's Best</button>
        <button className="nav-btn" onClick={() => scrollToSection('collection')}>Collection</button>
        <button className="nav-btn" onClick={() => scrollToSection('pre-designed')}>Pre-Designed</button>
        <button className="nav-btn" onClick={() => scrollToSection('sustainability')}>Sustainability</button>
      </div>

      <div className="nav-right">
        <button className="icon-btn" aria-label="Search">
          <FaSearch />
        </button>
        <button className="icon-btn" aria-label="Profile">
          <FaUser />
        </button>
        <button 
          className="icon-btn favorites-btn" 
          onClick={onFavoritesClick}
          aria-label={`Favorites (${favorites.length} items)`}
        >
          <FaHeart />
          {favorites.length > 0 && (
            <span className="favorites-count" aria-hidden="true">
              {favorites.length}
            </span>
          )}
        </button>
        <button 
          className="icon-btn cart-btn" 
          onClick={onCartClick}
          aria-label={`Shopping cart with ${cartItems.length} items`}
        >
          <FaShoppingCart />
          {cartItems.length > 0 && (
            <span className="cart-count" aria-hidden="true">
              {cartItems.length}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
import React from 'react';
import { FaTimes, FaShoppingCart } from 'react-icons/fa';
import '../styles/Favorites.css';

function Favorites({ items, onClose, onRemove, onAddToCart }) {
  const renderItemDetails = (item) => {
    if (item.type === 'predesigned') {
      return (
        <>
          <h3>{item.name}</h3>
          <p className="item-price">${item.price.toFixed(2)}</p>
        </>
      );
    }

    if (item.type === 'custom') {
      return (
        <>
          <h3>Custom Design</h3>
          <p className="item-price">${item.price.toFixed(2)}</p>
        </>
      );
    }
    
    return (
      <>
        <h3>{item.name}</h3>
        <p className="item-description">{item.description}</p>
        <p className="item-price">${item.price.toFixed(2)}</p>
        {item.colors && (
          <div className="color-circles">
            {item.colors.map((color, index) => (
              <span
                key={index}
                className="color-circle"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}
      </>
    );
  };

  return (
    <div className="favorites-container" role="dialog" aria-labelledby="favorites-title">
      <button 
        className="close-button" 
        onClick={onClose}
        aria-label="Close favorites"
      >
        <FaTimes />
      </button>
      <h2 id="favorites-title">Your Favorites</h2>
      
      {items.length === 0 ? (
        <p className="empty-favorites">No favorites yet</p>
      ) : (
        <div className="favorites-items">
          {items.map((item) => (
            <div 
              key={item.id} 
              className={`favorite-item ${item.type}`}
              data-type={item.type}
            >
              <div className="item-preview">
                <img 
                  src={item.image || item.design?.cakeBase} 
                  alt={item.name || 'Custom Cake Design'} 
                />
              </div>
              <div className="item-details">
                {renderItemDetails(item)}
                <div className="item-actions">
                  <button 
                    className="add-to-cart-btn"
                    onClick={() => onAddToCart(item)}
                    aria-label={`Add ${item.name || 'Custom Design'} to cart`}
                  >
                    <FaShoppingCart /> Add to Cart
                  </button>
                  <button 
                    className="remove-btn"
                    onClick={() => onRemove(item)}
                    aria-label={`Remove ${item.name || 'Custom Design'} from favorites`}
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
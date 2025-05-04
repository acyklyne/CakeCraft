import React from 'react';
import { FaTimes } from 'react-icons/fa';
import '../styles/Cart.css';

function Cart({ items, onClose, onRemoveItem }) {
  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="cart-container" role="dialog" aria-labelledby="cart-title">
      <button 
        className="close-button" 
        onClick={onClose}
        aria-label="Close cart"
      >
        <FaTimes />
      </button>
      <h2 id="cart-title">Your Cart</h2>
      
      {items.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {items.map((item, index) => (
              <div key={item.id} className="cart-item">
                <div className="item-preview">
                  <img src={item.design.cakeBase} alt="Custom Cake Design" />
                </div>
                <div className="item-details">
                  <h3>Custom Cake Design</h3>
                  <p>Price: ${item.price.toFixed(2)}</p>
                </div>
                <button 
                  className="remove-btn"
                  onClick={() => onRemoveItem(index)}
                  aria-label="Remove item from cart"
                >
                  <FaTimes />
                </button>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <div className="total">
              <span>Total:</span>
              <span>${calculateTotal().toFixed(2)}</span>
            </div>
            <button className="checkout-btn">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
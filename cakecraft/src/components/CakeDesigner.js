import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import cakeBase1 from '../assets/cake_base1.png';
import cakeBase2 from '../assets/cake_base2.png';
import filling1 from '../assets/filling1.png';
import filling2 from '../assets/filling2.png';
import frosting1 from '../assets/frosting1.png';
import frosting2 from '../assets/frosting2.png';
import decoration1 from '../assets/decoration1.png';
import decoration2 from '../assets/decoration2.png';
import '../styles/CakeDesigner.css';

const cakeBases = [cakeBase1, cakeBase2];
const fillings = [filling1, filling2];
const frostings = [frosting1, frosting2];
const decorations = [decoration1, decoration2];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function CakeDesigner({ onClose, onAddToCart }) {
  const [cakeBase, setCakeBase] = useState(getRandomItem(cakeBases));
  const [filling, setFilling] = useState(getRandomItem(fillings));
  const [frosting, setFrosting] = useState(getRandomItem(frostings));
  const [decoration, setDecoration] = useState(getRandomItem(decorations));

  const handleCreate = () => {
    const design = {
      cakeBase,
      filling,
      frosting,
      decoration,
      price: 45.99
    };
    onAddToCart(design);
    onClose();
  };

  return (
    <div className="cake-designer-container" role="dialog" aria-labelledby="designer-title">
      <button 
        className="close-button" 
        onClick={onClose}
        aria-label="Close cake designer"
      >
        <FaTimes />
      </button>
      <h2 id="designer-title">Design Your Cake</h2>
      <div className="cake-parts">
        <div className="cake-part">
          <h3>Cake Base</h3>
          <img
            src={cakeBase}
            alt="Cake Base"
            className="cake-part-image"
            onClick={() => setCakeBase(getRandomItem(cakeBases))}
            title="Click to change Cake Base"
            role="button"
            tabIndex={0}
          />
        </div>
        <div className="cake-part">
          <h3>Filling</h3>
          <img
            src={filling}
            alt="Filling"
            className="cake-part-image"
            onClick={() => setFilling(getRandomItem(fillings))}
            title="Click to change Filling"
            role="button"
            tabIndex={0}
          />
        </div>
        <div className="cake-part">
          <h3>Frosting/Icing</h3>
          <img
            src={frosting}
            alt="Frosting/Icing"
            className="cake-part-image"
            onClick={() => setFrosting(getRandomItem(frostings))}
            title="Click to change Frosting/Icing"
            role="button"
            tabIndex={0}
          />
        </div>
        <div className="cake-part">
          <h3>Decoration</h3>
          <img
            src={decoration}
            alt="Decoration"
            className="cake-part-image"
            onClick={() => setDecoration(getRandomItem(decorations))}
            title="Click to change Decoration"
            role="button"
            tabIndex={0}
          />
        </div>
      </div>
      <button 
        className="create-btn" 
        onClick={handleCreate}
        aria-label="Add design to cart"
      >
        Create Design
      </button>
    </div>
  );
}

export default CakeDesigner;
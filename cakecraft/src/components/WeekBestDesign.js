import React from 'react';
import '../styles/WeekBestDesign.css'; // Assuming you have a CSS file for styles
import { FaHeart } from 'react-icons/fa';

const designs = [
  {
    id: 1,
    image: require('../assets/bestdesign1.png'),
    name: 'Banana Delight',
    description: 'Rich banana cake with creamy frosting',
    price: '$45',
    colors: ['yellow', '#A9746E', '#D9B382'],
  },
  {
    id: 2,
    image: require('../assets/bestdesign2.jpg'),
    name: 'Vanilla Dream',
    description: 'Light vanilla cake with fresh cream',
    price: '$40',
    colors: ['#FFF9CE', '#F5E1A4', '#D9B382'],
  },
  {
    id: 3,
    image: require('../assets/bestdesign3.png'),
    name: 'Berry Bliss',
    description: 'Mixed berry cake with tangy glaze',
    price: '$50',
    colors: ['#8B0000', '#FF6347', '#FFC0CB'],
  },
];

function WeekBestDesign() {
  return (
    <section id="weeks-best" className="week-best-design">
      <h2>Week’s Best Design</h2>
      <div className="designs-container">
        {designs.map(({ id, image, name, description, price, colors }) => (
          <div key={id} className="design-card">
            <div className="image-container">
              <img src={image} alt={name} />
              <button className="heart-btn" aria-label="Favorite">
                <FaHeart />
              </button>
            </div>
            <div className="design-info">
              <h3 className="design-name">{name}</h3>
              <div className="desc-price-row">
                <p className="design-description">{description}</p>
                <p className="design-price">{price}</p>
              </div>
              <div className="color-circles">
                {colors.map((color, index) => (
                  <span
                    key={index}
                    className="color-circle"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WeekBestDesign;

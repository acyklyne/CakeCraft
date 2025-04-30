import React, { useState } from 'react';
import '../styles/Collection.css';

const images = [
  {
    id: 1,
    name: 'Cake base',
    src: require('../assets/cakebase.png'), // Placeholder image path, replace with actual
    size: 'normal',
  },
  {
    id: 2,
    name: 'Decorations',
    src: require('../assets/decorations.png'), // Placeholder image path, replace with actual
    size: 'long',
  },
  {
    id: 3,
    name: 'Frosting/Icing',
    src: require('../assets/frosting.png'), // Placeholder image path, replace with actual
    size: 'long',
  },
  {
    id: 4,
    name: 'Fillings',
    src: require('../assets/fillings.png'), // Placeholder image path, replace with actual
    size: 'normal',
  },
];

function Collection() {
  const [activeId, setActiveId] = useState(null);

  const handleClick = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="collection" className="collection-section">
      <h2>Collection</h2>
      <div className="collection-grid">
        {images.map(({ id, name, src, size }) => (
          <div
            key={id}
            className={`collection-item ${size} ${activeId === id ? 'active' : ''}`}
            onClick={() => handleClick(id)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => { if (e.key === 'Enter') handleClick(id); }}
          >
            <img src={src} alt={name} className="collection-image" />
            <div className="name-box">{name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Collection;

import React, { useState, useRef } from 'react';
import { FaHeart, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../styles/PreDesigned.css';

const designs = [
  {
    id: 1,
    image: require('../assets/predesign1.png'),
    name: 'Design 1',
  },
  {
    id: 2,
    image: require('../assets/predesign2.png'),
    name: 'Design 2',
  },
  {
    id: 3,
    image: require('../assets/predesign3.png'),
    name: 'Design 3',
  },
  {
    id: 4,
    image: require('../assets/predesign4.png'),
    name: 'Design 4',
  },
  {
    id: 5,
    image: require('../assets/predesign5.png'),
    name: 'Design 5',
  }
];

function PreDesigned() {
  const [favorites, setFavorites] = useState([]);
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const scrollTo = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 500;
      const newScrollLeft = containerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      containerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  const onMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
  };

  const onMouseLeave = () => {
    isDragging.current = false;
  };

  const onMouseUp = () => {
    isDragging.current = false;
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section id="pre-designed" className="pre-designed-section">
      <h2>Pre-Designed</h2>
      <div className="pre-designed-wrapper">
        <button 
          className="scroll-button left"
          onClick={() => scrollTo('left')}
          aria-label="Scroll left"
        >
          <FaChevronLeft />
        </button>

        <div
          className="pre-designed-container"
          ref={containerRef}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
          {designs.map(({ id, image, name }) => (
            <div key={id} className="predesigned-card">
              <div className="image-container-predesigned">
                <img src={image} alt={name} />
                <button
                  className={`heart-btn ${favorites.includes(id) ? 'favorited' : ''}`}
                  onClick={() => toggleFavorite(id)}
                  aria-label="Favorite"
                >
                  <FaHeart />
                </button>
              </div>
              <button className="edit-btn">Edit Design</button>
            </div>
          ))}
        </div>

        <button 
          className="scroll-button right"
          onClick={() => scrollTo('right')}
          aria-label="Scroll right"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}

export default PreDesigned;
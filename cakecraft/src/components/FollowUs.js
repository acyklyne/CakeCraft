import React from 'react';
import '../styles/FollowUs.css';
import logo from '../assets/logo.jpg';
import cake1 from '../assets/f_cake1.jpg';
import cake2 from '../assets/f_cake2.jpg';
import cake3 from '../assets/f_cake3.png';
import cake4 from '../assets/f_cake4.png';

function FollowUs() {
  return (
    <div className="followus-section">
        <h2>Follow Us @CakeCraft_ph</h2>
        <div className="followus-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <div className="cakes-grid">
        <img src={cake1} alt="Cake 1" className="cake-image" />
        <img src={cake2} alt="Cake 2" className="cake-image" />
        <img src={cake3} alt="Cake 3" className="cake-image" />
        <img src={cake4} alt="Cake 4" className="cake-image" />
        </div>
      </div>
    </div>
  );
}

export default FollowUs;
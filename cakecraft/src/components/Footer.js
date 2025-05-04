import React, { useState } from 'react';
import { FaPaperPlane, FaInstagram, FaFacebookF, FaPinterestP, FaTiktok, FaComments } from 'react-icons/fa';
import '../styles/Footer.css';

function Footer() {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setAgreed(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (agreed && email) {
      alert('Thank you for joining our club!');
      setEmail('');
      setAgreed(false);
    } else {
      alert('Please enter your email and agree to receive emails.');
    }
  };

  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };

  const handleMessageSubmit = () => {
    if (message.trim()) {
      alert('Message sent!');
      setMessage('');
      setChatOpen(false);
    }
  };

  return (
    <footer className="footer-container">
      <div className="footer-columns">
        <div className="footer-column first-column">
          <h3>Join Our Club, Get 15% Off For Your Birthday!</h3>
          <form className="email-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <button type="submit" className="submit-button">
              <FaPaperPlane />
            </button>
          </form>
          <label className="checkbox-label">
            <input 
              type="checkbox" 
              checked={agreed} 
              onChange={handleCheckboxChange} 
              required 
            />
            <span>By Submitting your email, you agree to receive advertising emails from CakeCraft.</span>
          </label>
          <div className="social-icons">
            <FaInstagram className="social-icon" />
            <FaFacebookF className="social-icon" />
            <FaPinterestP className="social-icon" />
            <FaTiktok className="social-icon" />
          </div>
        </div>

        <div className="footer-column">
          <h4>About CakeCraft</h4>
          <ul>
            <li>Collection</li>
            <li>Sustainability</li>
            <li>Privacy Policy</li>
            <li>Support System</li>
            <li>Terms & Condition</li>
            <li>Copyright Notice</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Help & Support</h4>
          <ul>
            <li>Orders & Shipping</li>
            <li>Returns & Refunds</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Join Up</h4>
          <ul>
            <li>CakeCraft Club</li>
            <li>Careers</li>
            <li>Visit Us</li>
          </ul>
        </div>
      </div>

      <button className="chat-toggle" onClick={toggleChat}>
        <FaComments />
        <span>Chat with us</span>
      </button>

      {chatOpen && (
        <div className="footer-chat-box">
          <textarea 
            placeholder="Type your message..." 
            rows="3"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="button" onClick={handleMessageSubmit}>Send</button>
        </div>
      )}

      <div className="footer-bottom">
        <p>© 2025 Cakecraft. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
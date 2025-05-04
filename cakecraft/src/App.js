import React, { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import WeekBestDesign from './components/WeekBestDesign';
import Collection from './components/Collection';
import PreDesigned from './components/PreDesigned';
import Sustainability from './components/Sustainability';
import FollowUs from './components/FollowUs';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Favorites from './components/Favorites';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  const handleAddToCart = (design) => {
    const newItem = {
      id: Date.now(),
      design,
      price: 45.99
    };
    setCartItems(prevItems => [...prevItems, newItem]);
    setShowCart(true);
  };

  const handleRemoveFromCart = (index) => {
    setCartItems(prevItems => prevItems.filter((_, i) => i !== index));
  };

  const handleToggleFavorite = (item) => {
    setFavorites(prev => {
      const exists = prev.some(fav => fav.id === item.id);
      if (exists) {
        return prev.filter(fav => fav.id !== item.id);
      }
      return [...prev, item];
    });
  };

  return (
    <div className="App">
      <Header />
      <Navbar 
        cartItems={cartItems}
        favorites={favorites}
        onCartClick={() => setShowCart(!showCart)}
        onFavoritesClick={() => setShowFavorites(!showFavorites)}
      />
      <MainSection onAddToCart={handleAddToCart} />
      <WeekBestDesign onToggleFavorite={handleToggleFavorite} favorites={favorites} />
      <Collection />
      <PreDesigned onToggleFavorite={handleToggleFavorite} favorites={favorites} />
      <Sustainability />
      <FollowUs />
      <Footer />
      {showCart && (
        <Cart
          items={cartItems}
          onClose={() => setShowCart(false)}
          onRemoveItem={handleRemoveFromCart}
        />
      )}
      {showFavorites && (
        <Favorites
          items={favorites}
          onClose={() => setShowFavorites(false)}
          onRemove={handleToggleFavorite}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
}

export default App;
import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import WeekBestDesign from './components/WeekBestDesign';
import Collection from './components/Collection';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <MainSection />
      <WeekBestDesign />
      <Collection />
    </div>
  );
}

export default App;

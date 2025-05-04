import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import WeekBestDesign from './components/WeekBestDesign';
import Collection from './components/Collection';
import PreDesigned from './components/PreDesigned';
import Sustainability from './components/Sustainability';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <MainSection />
      <WeekBestDesign />
      <Collection />
      <PreDesigned />
      <Sustainability />
    </div>
  );
}

export default App;

import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import './app.css';  // Importing the CSS file
import loco from './hooks/locoscroll.js'
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {  // Use `useEffect` with an arrow function
    loco();
  }, []);
  return (
    <div id="main">
    <div className="bg-cover bg-center" >
      <Navbar />
      <HeroSection />
    </div>
    </div>
  );
}

export default App;

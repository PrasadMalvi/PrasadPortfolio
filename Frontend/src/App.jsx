import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, useScroll } from 'framer-motion';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import HomePage from './HomePage';
import AnalyticsPage from './Components/AnalyticsPage';
import ProgressDots from './Components/ProgressDots';
import './index.css';

function App() {
  const { scrollYProgress } = useScroll();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Router>
      <div className="app-container">
        {/* Cinematic Backdrop */}
        <div className="app-bg" />
        <div 
          className="mouse-glow" 
          style={{ 
            left: mousePos.x, 
            top: mousePos.y 
          }} 
        />
        <div className="scanline" />
        <div className="scanline" />
        <div className="noise-overlay" />
        <div className="radial-glow" />

        {/* Cinematic Progress Line */}
        <motion.div 
          className="scroll-progress-line"
          style={{ scaleX: scrollYProgress }}
        />
        
        <Navbar />
        <ProgressDots />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

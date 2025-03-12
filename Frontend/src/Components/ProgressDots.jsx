import React, { useEffect, useState } from "react";
import "./ProgressDots.css"; // Add styles in this file

const ProgressDots = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.floor((scrollPosition / totalHeight) * 4); // 5 dots, index 0-4
      setActiveIndex(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="progress-bar">
      {[...Array(5)].map((_, index) => (
        <span key={index} className={`dot ${index === activeIndex ? "active" : ""}`}></span>
      ))}
    </div>
  );
};

export default ProgressDots;

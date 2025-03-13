import React, { useEffect, useState, useRef } from "react";
import "./ProgressDots.css";

const ProgressDots = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollTimeout = useRef(null); // Added useRef for timeout

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        const sections = document.querySelectorAll("section");
        let index = sections.length - 1;

        sections.forEach((section, i) => {
          const rect = section.getBoundingClientRect();
          // Adjusted detection logic for better mobile accuracy
          if (rect.top <= window.innerHeight * 0.6 && rect.bottom >= window.innerHeight * 0.1) {
            index = i;
          }
        });

        setActiveIndex(index);
      }, 100); // Debounce scroll events
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("touchmove", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
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
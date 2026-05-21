import React, { useEffect, useState } from "react";
import "./ProgressDots.css";

const ProgressDots = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const sectionElements = document.querySelectorAll("section");
    const sectionData = Array.from(sectionElements).map(s => ({
      id: s.id || 'section',
      label: s.getAttribute('data-label') || s.id || 'Explore'
    }));
    setSections(sectionData);

    const options = {
      threshold: 0.3,
      rootMargin: "-25% 0px -25% 0px"
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Array.from(sectionElements).indexOf(entry.target);
          if (index !== -1) {
            setActiveIndex(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    sectionElements.forEach(s => observer.observe(s));

    // Handle scroll to catch exact boundaries
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      sectionElements.forEach((section, index) => {
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
          setActiveIndex(index);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      sectionElements.forEach(s => observer.unobserve(s));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (index) => {
    const sectionElements = document.querySelectorAll("section");
    if (sectionElements[index]) {
      sectionElements[index].scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="progress-bar">
      {sections.map((section, index) => (
        <div key={index} className="dot-wrapper">
          <span className="dot-label">{section.label.toUpperCase()}</span>
          <button
            className={`dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => scrollToSection(index)}
            aria-label={`Go to ${section.label}`}
          ></button>
        </div>
      ))}
    </div>
  );
};

export default ProgressDots;
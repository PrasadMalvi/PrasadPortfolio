import React, { useEffect, useState } from "react";
import "./ProgressDots.css";

const ProgressDots = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalSections, setTotalSections] = useState(0);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    setTotalSections(sections.length);

    // Create an IntersectionObserver
    const options = {
      threshold: 0.3, // Trigger when 30% of section is visible
      rootMargin: "0px 0px -50% 0px" // Detect when top 50% of viewport
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionArray = Array.from(sections);
          const index = sectionArray.indexOf(entry.target);
          setActiveIndex(index);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="progress-bar">
      {[...Array(totalSections)].map((_, index) => (
        <span
          key={index}
          className={`dot ${index === activeIndex ? "active" : ""}`}
        ></span>
      ))}
    </div>
  );
};

export default ProgressDots;
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './ScrollingText.css';

const ScrollingText = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const xLeft = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const xRight = useTransform(scrollYProgress, [0, 1], [-500, 0]);

  return (
    <section ref={containerRef} data-label="Expertise" className="scrolling-text-container">
      <motion.div style={{ x: xLeft }} className="scrolling-row">
        <span>SOFTWARE</span>
        <span className="outline">ENGINEER</span>
        <span>SOFTWARE</span>
        <span className="outline">ENGINEER</span>
        <span>SOFTWARE</span>
        <span className="outline">ENGINEER</span>
      </motion.div>
      <motion.div style={{ x: xRight }} className="scrolling-row secondary">
        <span className="outline">CREATIVE</span>
        <span>ARCHITECT</span>
        <span className="outline">CREATIVE</span>
        <span>ARCHITECT</span>
        <span className="outline">CREATIVE</span>
        <span>ARCHITECT</span>
      </motion.div>
    </section>
  );
};

export default ScrollingText;

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJest, SiMocha, SiSelenium } from "react-icons/si";
import developerImg from "../assets/desktopLogo.png";
import "./Hero.css";


const HeroSection = () => {
  const texts = ["MERN Developer", "Web Developer", "Frontend Developer", "Backend Developer", "Quality Assurance","Android Developer"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      {/* Left Content */}
      <div className="hero-content">
  <motion.div 
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="intro-box"
  >
    <p>Hello, I am</p>
    <h1>👋 Prasad Malvi</h1>
  </motion.div>

  <div className="changing-text">
    <span className="animated-text">{texts[index]}</span>
  </div>
</div>


      {/* Right Side Illustration & Icons */}
      <motion.div className="hero-image">
        <div className="circle" />
        <img src={developerImg} alt="Developer" />

        {/* Floating Icons */}
        <motion.div className="icon js text-yellow-500" animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
          <FaJs size={80} />
        </motion.div>
        <motion.div className="icon react text-blue-400" animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
          <FaReact size={80} />
        </motion.div>
        <motion.div className="icon node text-green-500" animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
          <FaNodeJs size={80} />
        </motion.div>
        <motion.div className="icon css text-blue-600" animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
          <FaCss3Alt size={80} />
        </motion.div>
        <motion.div className="icon mongo text-green-700" animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
          <SiMongodb size={80} />
        </motion.div>
        <motion.div className="icon express text-gray-700" animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
          <SiExpress size={80} />
        </motion.div>
        <motion.div className="icon selenium text-green-500" animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
          <SiSelenium size={80} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

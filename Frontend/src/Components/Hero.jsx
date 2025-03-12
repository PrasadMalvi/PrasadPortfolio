import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaReact, FaNodeJs, FaJs, FaCss3Alt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiSelenium } from "react-icons/si";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "./Hero.css";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import ProgressDots from "./ProgressDots";

const HeroSection = () => {
  const texts = [
    "MERN Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Quality Assurance",
    "Android Developer",
  ];
  const socialLinks = [
    { icon: <FaInstagram size={20} />, url: "https://www.instagram.com/malviprasad/", color: "text-pink-500" },
    { icon: <FaLinkedin size={20} />, url: "https://www.linkedin.com/in/prasad-malvi/", color: "text-blue-600" },
    { icon: <FaGithub size={20} />, url: "https://github.com/PrasadMalvi", color: "text-gray-900" },
  ];
  const bubbles = [
    { size: 30, x: -50, y: -40, delay: 0 },
    { size: 40, x: 60, y: 50, delay: 0.2 },
    { size: 20, x: -30, y: 70, delay: 0.4 },
    { size: 50, x: 80, y: -20, delay: 0.6 },
    { size: 25, x: -70, y: -60, delay: 0.8 },
  ];

  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 1500;

  useEffect(() => {
    const startTypingDelay = index === 0 && displayedText === "" ? 2000 : 0; // ⬅️ Delay only at the start
  
    const startTyping = setTimeout(() => {
      const fullText = texts[index];
  
      if (!isDeleting && displayedText.length < fullText.length) {
        setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else if (isDeleting && displayedText.length > 0) {
        setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length - 1));
        }, deletingSpeed);
      } else {
        setTimeout(() => {
          setIsDeleting(!isDeleting);
          if (isDeleting) {
            setIndex((prev) => (prev + 1) % texts.length);
          }
        }, pauseTime);
      }
    }, startTypingDelay);
  
    return () => clearTimeout(startTyping);
  }, [displayedText, isDeleting]);
  

  return (
    <section className="hero" id="home">
      {/* Left Side Animation */}
      <DotLottieReact
        src="https://lottie.host/359597b8-42d5-43f5-8261-2e9818a49f92/gcL3swqx44.lottie"
        loop
        autoplay
        className="lottie-icon"
      />

      <div className="hero-content">
        {/* Intro Box */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="intro-box"
        >
          <div className="intro-content">
            <p>
              I am <span className="name">Prasad</span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Right Side - Typing Effect Inside the Circle */}
      <motion.div className="hero-image">
        <div className="circle">
          <span className="changing-text-circle">
            {displayedText}
          <span className="cursor">|</span>

          </span>
        </div>

        {/* Lottie Animation */}
        <DotLottieReact
          src="https://lottie.host/df60580d-f1ab-44ae-8d7a-b92b8095d924/0D6PhUqHIq.lottie"
          loop
          autoplay
          className="aniimag"
        />

        {/* Floating Icons */}
        <motion.div
          className="icon js text-yellow-500"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <FaJs size={70} />
        </motion.div>
        <motion.div
          className="icon react text-blue-400"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <FaReact size={70} />
        </motion.div>
        <motion.div
          className="icon node text-green-500"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <FaNodeJs size={70} />
        </motion.div>
        <motion.div
          className="icon css text-blue-600"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <FaCss3Alt size={70} />
        </motion.div>
        <motion.div
          className="icon mongo text-green-700"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <SiMongodb size={70} />
        </motion.div>
        <motion.div
          className="icon express text-gray-700"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <SiExpress size={70} />
        </motion.div>
        <motion.div
          className="icon selenium text-green-500"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <SiSelenium size={70} />
        </motion.div>
      </motion.div>
      <div className="social-links">
      {socialLinks.map((link, index) => (
        <motion.a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`social-icon ${link.color}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.3, duration: 0.5 }}
          whileHover={{ scale: 1.2 }}
        >
          {link.icon}
        </motion.a>
      ))}
    </div>
    <div className="circle2"></div>
    <div className="circle3"></div>
    <div className="circle4"></div>
    <ProgressDots />
    </section>
  );
};

export default HeroSection;

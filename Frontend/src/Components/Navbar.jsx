import { useState, useEffect } from "react";
import logo from "../assets/Plogo.png";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log("ScrollY:", window.scrollY); // Debugging: Check Scroll Position
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolling ? "scrolled" : ""}`} role="navigation">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      {/* Hamburger Button */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close Menu" : "Open Menu"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Navigation Links */}
      <div className={`nav-links-container ${menuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          {["Home", "About", "Skills", "Work", "Contact"].map((item) => (
            <li key={item} className="nav-item">
              <a
                href={`#${item.toLowerCase()}`}
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
              <span className="nav-underline"></span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import { useState, useEffect } from "react";
import logo from "../assets/Plogo.png";
import "./Navbar.css";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolling ? "scrolled" : ""}`}>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      {/* Hamburger Button for Mobile */}
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {/* Navigation Links */}
      <div className={`nav-links-container ${menuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          {["Home", "About", "Skills", "Work", "Contact"].map((item) => (
            <li key={item} className="nav-item">
              <a
                href={`#${item.toLowerCase()}`}
                className="nav-link"
                onClick={() => setMenuOpen(false)} // Close menu on click
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

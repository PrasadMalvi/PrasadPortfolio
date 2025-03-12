import logo from "../assets/Plogo.png";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      {/* Center - Navigation Links */}
      <div className="nav-links-container">
        <ul className="nav-links">
          {["Home", "About", "Skills", "Work", "Contact"].map((item) => (
            <li key={item} className="nav-item">
              <a href={`#${item.toLowerCase()}`} className="nav-link">
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

import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-highlight">Nutri</span>trackers
        </div>

        <nav className={`navbar-links ${isOpen ? "active" : ""}`}>
          <a href="#inicio">Inicio</a>
          <a href="#caracteristicas">Características</a>
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#precios">Precios</a>
          <a href="#faq">FAQ</a>
          <a href="#contacto" className="contact-btn">Contacto</a>
        </nav>

        <div className="menu-toggle" onClick={toggleMenu}>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

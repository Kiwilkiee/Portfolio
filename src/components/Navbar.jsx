import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import '../Style/navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <button className="navbar-toggle" onClick={toggleMenu}>
        &#9776;
      </button>
      <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <li><ScrollLink to="home" smooth={true} duration={1000} onClick={toggleMenu}>Beranda</ScrollLink></li>
        <li><ScrollLink to="about" smooth={true} duration={500} onClick={toggleMenu}>Tentang</ScrollLink></li>
        <li><ScrollLink to="sertifikat" smooth={true} duration={500} onClick={toggleMenu}>Pendidikan</ScrollLink></li>
        <li><ScrollLink to="contact" smooth={true} duration={500} onClick={toggleMenu}>Kontak</ScrollLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;

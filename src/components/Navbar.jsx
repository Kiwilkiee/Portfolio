import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Style/navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li><NavLink exact to="/" activeClassName="active">Beranda</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">Tentang</NavLink></li>
        <li><NavLink to="/certificate" activeClassName="active">Pendidikan</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active">Kontak</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;

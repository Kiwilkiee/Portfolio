import React from 'react';
import { NavLink} from 'react-router-dom';
import '../Style/index.css';
import About from './About';

function Home() {
    
  return (
    <div className="home-background">
      <div className="home-page">
        <div className="home-content">
          <img src="/img/wldn.jpg" alt="Wildan Putra Dwi Alfaris" className="home-photo" />
          <h1>Wildan Putra Dwi Alfaris</h1>
          <h2>WEB DEVELOPER</h2>
          <button className="about-button">
            <NavLink to="/about" style={{ 'color': 'black', 'textDecoration': 'none'}}>Tentang Saya</NavLink>
          </button>
        </div>
      </div>

      <About />
    </div>
  );
}

export default Home;

import React, { useEffect, useRef } from 'react';
import { Link as ScrollLink, Element } from 'react-scroll';
import '../Style/index.css';
import About from './About';
import Contact from './Contact';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Style/slider.css'; 
import { FaInstagram, FaFacebookF, FaGithub, FaEnvelope } from 'react-icons/fa';

function Home() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    });

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '1%',
  };

  const educationData = [
    {
      school: 'SMP Ibnu Aqil',
      description: 'LULUS pada 2022',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzPXaJkOMSMetTxJ3HN7JR_W-5wU43klIYdA&s',
    },
    {
      school: 'SMK Negeri 1 Ciomas',
      description: 'Sekolah Sekarang',
      logo: '/img/SMK.jpeg',
    },
  ];
  
  return (
    <div name='home' className="home-background">
      <div className="home-page">
        <div className="home-content">
          <img src="/img/wldn.jpg" alt="Wildan Putra Dwi Alfaris" className="home-photo" />
          <h1>Wildan Putra Dwi Alfaris</h1>
          <h2>WEB DEVELOPER</h2>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub />
            </a>
            <a href="mailto:someone@example.com?subject=Inquiry&body=Hello,%20I%20would%20like%20to%20get%20in%20touch." className="social-icon">
              <FaEnvelope />
            </a>
          </div>
          <ScrollLink to="about" smooth={true} duration={500} className="about-button">
            Tentang Saya
          </ScrollLink>
        </div>
      </div>

      <Element name="about">
        <div ref={aboutRef}>
          <About />
        </div>
      </Element>

      <div id="sertifikat" className="slider-container">
        <Slider {...settings}>
          <div>
            <img src="/img/serti1.jpg" alt="Sertifikat 1" className="slider-image" />
          </div>
          <div>
            <img src="/img/serti2.jpg" alt="Sertifikat 2" className="slider-image" />
          </div>
          <div>
            <img src="/img/serti3.jpg" alt="Sertifikat 3" className="slider-image" />
          </div>
          <div>
            <img src="/img/serti4.jpg" alt="Sertifikat 4" className="slider-image" />
          </div>
        </Slider>
        <div className="education-history">
          {educationData.map((item, index) => (
            <div key={index} className="education-item">
              <img src={item.logo} alt={`${item.school} logo`} className="school-logo" />
              <div>
                <h3>{item.school}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
}

export default Home;

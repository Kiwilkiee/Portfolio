import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Style/slider.css';

const Sertif = () => {
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
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzPXaJkOMSMetTxJ3HN7JR_W-5wU43klIYdA&s', // Gantilah dengan path logo yang sesuai
    },
    {
      school: 'SMK Neger 1 Ciomas',
      description: 'Sekolah Sekarang',
      logo: '/img/SMK.jpeg', // Gantilah dengan path logo yang sesuai
    },
    // Tambahkan lebih banyak data sekolah sesuai kebutuhan
  ];

  return (
    <div className="slider-container">
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
  );
};

export default Sertif;

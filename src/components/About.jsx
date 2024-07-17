import React, { useEffect } from 'react';
import '../Style/index.css';

function About() {
  useEffect(() => {
    const leftElements = document.querySelectorAll('.about-left, .about-left2');
    const rightElements = document.querySelectorAll('.about-right, .about-right2');
    
    leftElements.forEach(el => {
      el.classList.add('slide-in-left');
    });
    
    rightElements.forEach(el => {
      el.classList.add('slide-in-right');
    });
  }, []);

  return (
    <div className="about-page">
      <div className="about-content">
        <div className="about-left">
          <img src="/img/about1.png" alt="Tentang Saya" className="about-image" />
        </div>
        <div className="about-right">
          <h2>Tentang Saya</h2>
          <div className="about-box">
            <p>Nama saya Wildan Putra Dwi Alfaris biasa dipanggil Wildan, kini sudah menginjak umur 17 tahun dan menduduki bangku kelas 12 SMK di SMK Negeri 1 Ciomas.
              Saya dilahirkan pada 18 April 2007, dengan domisili Kabupaten Bogor, Kecamatan Ciomas, Desa Laladon.
            </p>
          </div>
        </div>
      </div>

      <div className="about-content">
        <div className="about-left2">
          <div className="about-box">
            <p>Saat ini saya berada di sekolah SMK Negeri 1 Ciomas dan saya mengambil jurusan Pengembangan Perangkat Lunak dan Gim (PPLG)
               dengan alasan ketika saya ingin memasuki SMK ini saya merasa tertarik dan lebih ingin tahu tentang jurusan PPLG,
               dan saya merasa bahwa peluang bekerja pada masa kini lebih banyak di bidang teknologi, jadi saya tertarik untuk 
               mempelajari apa jasa yang dibutuhkan dan apa saja yang harus dikuasai untuk menjadi seorang PROGRAMMER.</p>
          </div>
        </div>
        <div className="about-right2">
          <img src="/img/about.png" alt="SMKN1CIOMAS" className="about-image2" />
        </div>
      </div>
    </div>
  );
}

export default About;

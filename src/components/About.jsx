import React from 'react';
import '../Style/index.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
function About() {
  AOS.init();
  return (
    <div className="about-page">
      <div className="about-content ">
        <div className="about-left"  data-aos="zoom-in">
          <img src="/img/about1.png" alt="Tentang Saya" className="about-image" />
        </div>
        <div className="about-right " data-aos="zoom-in-up">
          <h2>Tentang Saya</h2>
          <div className="about-box"  data-aos="zoom-in-up">
            <p>Nama saya Wildan Putra Dwi Alfaris biasa dipanggil Wildan, kini sudah menginjak umur 17 tahun dan menduduki bangku kelas 12 SMK di SMK Negeri 1 Ciomas.
              Saya dilahirkan pada 18 April 2007, dengan domisili Kabupaten Bogor, Kecamatan Ciomas, Desa Laladon.
            </p>
          </div>
        </div>
      </div>

      {/* Kotak tambahan di bawah */}
      <div className="about-content" >
        <div className="about-left2 ">
          <div className="about-box" data-aos="zoom-in-up">
            <p>Saat ini saya berada di sekolah SMK Negeri 1 Ciomas dan saya mengambil jurusan Pengembangan Perangkat Lunak dan Gim (PPLG)
               dengan alasan ketika saya ingin memasuki SMK ini saya merasa tertarik dan lebih ingin tahu tentang jurusan PPLG,
               dan saya merasa bahwa peluang bekerja pada masa kini lebih banyak di bidang teknologi, jadi saya tertarik untuk 
               mempelajari apa jasa yang dibutuhkan  dan apa saja yang harus dikuasai untuk menjadi seorang PROGRAMMER.</p>
          </div>
        </div>
        <div className="about-right2 " data-aos="zoom-in">
          <img src="/img/about.png" alt="SMKN!CIOMAS" className="about-image2" />
        </div>
      </div>
    </div>
  );
}

export default About;

import React, { useEffect, useRef } from 'react';
import '../Style/index.css';

function About() {
  const aboutLeftRef = useRef(null);
  const aboutRightRef = useRef(null);
  const aboutLeft2Ref = useRef(null);
  const aboutRight2Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (aboutLeftRef.current) observer.observe(aboutLeftRef.current);
    if (aboutRightRef.current) observer.observe(aboutRightRef.current);
    if (aboutLeft2Ref.current) observer.observe(aboutLeft2Ref.current);
    if (aboutRight2Ref.current) observer.observe(aboutRight2Ref.current);

    return () => {
      if (aboutLeftRef.current) observer.unobserve(aboutLeftRef.current);
      if (aboutRightRef.current) observer.unobserve(aboutRightRef.current);
      if (aboutLeft2Ref.current) observer.unobserve(aboutLeft2Ref.current);
      if (aboutRight2Ref.current) observer.unobserve(aboutRight2Ref.current);
    };
  }, []);

  return (
    <div className="about-page">
      <div className="about-content">
        <div className="about-left animate-left" ref={aboutLeftRef}>
          <img src="/img/about1.png" alt="Tentang Saya" className="about-image" />
        </div>
        <div className="about-right animate-right" ref={aboutRightRef}>
          <h2>Tentang Saya</h2>
          <div className="about-box">
            <p>Nama saya Wildan Putra Dwi Alfaris biasa dipanggil Wildan, kini sudah menginjak umur 17 tahun dan menduduki bangku kelas 12 SMK di SMK Negeri 1 Ciomas.
              Saya dilahirkan pada 18 April 2007, dengan domisili Kabupaten Bogor, Kecamatan Ciomas, Desa Laladon.
            </p>
          </div>
        </div>
      </div>

      {/* Kotak tambahan di bawah */}
      <div className="about-content">
        <div className="about-left2 animate-left" ref={aboutLeft2Ref}>
          <div className="about-box">
            <p>Saat ini saya berada di sekolah SMK Negeri 1 Ciomas dan saya mengambil jurusan Pengembangan Perangkat Lunak dan Gim (PPLG)
               dengan alasan ketika saya ingin memasuki SMK ini saya merasa tertarik dan lebih ingin tahu tentang jurusan PPLG,
               dan saya merasa bahwa peluang bekerja pada masa kini lebih banyak di bidang teknologi, jadi saya tertarik untuk 
               mempelajari apa jasa yang dibutuhkan dan apa saja yang harus dikuasai untuk menjadi seorang PROGRAMMER.</p>
          </div>
        </div>
        <div className="about-right2 animate-right" ref={aboutRight2Ref}>
          <img src="/img/about.png" alt="SMKN!CIOMAS" className="about-image2" />
        </div>
      </div>
    </div>
  );
}

export default About;

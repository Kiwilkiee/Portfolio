import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { FaEnvelope, FaPhone, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import 'leaflet/dist/leaflet.css';
import '../Style/index.css';

function Contact() {
  return (
    <div id='kontak' className="contact-page">
      <div className="contact-left">
        {/* <MapContainer center={[-6.587479097448345, 106.7589154921992]} zoom={10} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[-6.589722, 106.790833]}>
            <Popup>
              Lokasi Saya
            </Popup>
          </Marker>
        </MapContainer> */}
      </div>
      <div className="contact-right">
        <h2>Kontak Saya</h2>
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <p>widanputradwialfariz@gmail.com </p>
        </div>
        <div className="contact-item">
          <FaInstagram className="contact-icon" />
          <p>@wldnptr.da_</p>
        </div>
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <p>+62 897-9664-178</p>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <p>Jl. Suralaya, Ciomas, Bogor, Indonesia</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;

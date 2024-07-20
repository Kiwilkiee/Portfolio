import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Sertifikat from './components/Sertif';



function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/about" element={<About/>} />
          
          <Route path='/Sertifikat' element={<Sertifikat/> } />
          <Route path="/contact" element={<Contact/>} />
          </Routes>
          
        
      </div>
    </Router>
  );
}

export default App;

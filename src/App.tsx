import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Layanan from './pages/Layanan';
import Kontak from './pages/Contact';
import Tentang from './pages/Tentang';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Beranda ✨</h1>} />
        <Route path="/layanan" element={<Layanan/>} />
        <Route path="/galeri" element={<h1>Galeri Kecantikan 📸</h1>} />
        <Route path="/tentang" element={<h1>{<Tentang/>}</h1>} />
        <Route path="/contact" element={<h1>{<Kontak/>}</h1>} />
      </Routes>
    </Router>
  );
};

export default App;

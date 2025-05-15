import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 32px',
      backgroundColor: '#fff0f5',
      borderBottom: '1px solid #eee',
    },
    logo: {
      fontSize: '1.5rem',
      color: '#cc3366',
      fontWeight: 'bold',
      textDecoration: 'none',
    },
    navLinks: {
      display: 'flex',
      listStyle: 'none',
      gap: '20px',
      margin: 0,
      padding: 0,
    },
    link: {
      textDecoration: 'none',
      color: '#444',
      fontWeight: 500,
      transition: 'color 0.2s ease',
    },
    bookingBtn: {
      backgroundColor: '#cc3366',
      color: 'white',
      padding: '8px 16px',
      borderRadius: '20px',
      textDecoration: 'none',
      transition: 'background-color 0.3s ease',
    }
  };

  return (
    <nav style={styles.navbar}>
      <div className="navbar-logo">
        <Link to="/" style={styles.logo}>🌸 Klinik Cantik</Link>
      </div>
      <ul style={styles.navLinks}>
        <li><Link to="/layanan" style={styles.link}>Layanan</Link></li>
        <li><Link to="/galeri" style={styles.link}>Galeri</Link></li>
        <li><Link to="/tentang" style={styles.link}>Tentang Kami</Link></li>
        <li><Link to="/contact" style={styles.bookingBtn}>Kontak</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

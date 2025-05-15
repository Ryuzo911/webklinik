import React from 'react';

const Kontak: React.FC = () => {
  const styles = {
    container: {
      padding: '32px',
      backgroundColor: '#fffafc',
      minHeight: '100vh',
    },
    heading: {
      fontSize: '2rem',
      color: '#cc3366',
      marginBottom: '24px',
      textAlign: 'center' as const
    },
    infoBox: {
      maxWidth: '600px',
      margin: '0 auto',
      backgroundColor: '#fff',
      padding: '24px',
      borderRadius: '16px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
    },
    label: {
      fontWeight: 'bold',
      color: '#cc3366',
      marginBottom: '8px',
    },
    text: {
      color: '#555',
      marginBottom: '16px'
    },
    link: {
      color: '#cc3366',
      textDecoration: 'none',
      fontWeight: '500'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Hubungi Kami 💌</h2>
      <div style={styles.infoBox}>
        <div style={styles.label}>📞 Telepon / WA</div>
        <div style={styles.text}><a href="https://wa.me/6281234567890" style={styles.link}>+62 812-3456-7890</a></div>

        <div style={styles.label}>📍 Alamat</div>
        <div style={styles.text}>Jl. Glowing No. 88, Balikpapan Cantik</div>

        <div style={styles.label}>📸 Instagram</div>
        <div style={styles.text}><a href="https://instagram.com/klinikglowup" style={styles.link}>@klinikglowup</a></div>

        <div style={styles.label}>⏰ Jam Operasional</div>
        <div style={styles.text}>Senin - Sabtu: 09.00 - 18.00</div>
      </div>
    </div>
  );
};

export default Kontak;

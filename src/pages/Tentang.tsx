import React from 'react';

const Tentang: React.FC = () => {
  const styles = {
    container: {
      padding: '40px',
      backgroundColor: '#fff0f5',
      minHeight: '100vh',
      fontFamily: 'sans-serif',
    },
    heading: {
      fontSize: '2.5rem',
      color: '#cc3366',
      textAlign: 'center' as const,
      marginBottom: '24px',
    },
    paragraph: {
      maxWidth: '800px',
      margin: '0 auto',
      fontSize: '1.1rem',
      color: '#444',
      lineHeight: '1.8',
      textAlign: 'center' as const,
    },
    highlight: {
      fontWeight: 'bold',
      color: '#cc3366',
    },
    founderBox: {
      marginTop: '40px',
      textAlign: 'center' as const,
      color: '#666',
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Tentang Kami ✨</h1>
      <p style={styles.paragraph}>
        <span style={styles.highlight}>Klinik GlowUp</span> didirikan dengan satu tujuan: membantu semua orang merasa cantik dan percaya diri dalam kulit mereka sendiri.
        Berawal dari mimpi sederhana, kami tumbuh menjadi tempat yang dipercaya untuk perawatan wajah dan tubuh yang aman, modern, dan penuh cinta.
      </p>
      <p style={{ ...styles.paragraph, marginTop: '24px' }}>
        Dengan tim profesional yang terlatih dan teknologi terkini, kami hadir bukan hanya untuk mempercantik,
        tapi untuk merawat dan menemani perjalananmu menjadi versi terbaik dari dirimu sendiri.
      </p>
      <div style={styles.founderBox}>
        <p><i>“Karena setiap kulit punya cerita, dan kami di sini untuk mendengarkan.”</i></p>
        <p>— Founder Klinik GlowUp</p>
      </div>
    </div>
  );
};

export default Tentang;

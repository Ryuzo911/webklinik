import React from 'react';

interface LayananItem {
  title: string;
  description: string;
  price: string;
}

const layananData: LayananItem[] = [
  {
    title: "Facial Glow Up",
    description: "Membersihkan pori-pori, angkat sel kulit mati, dan bikin kulitmu bercahaya.",
    price: "Rp 150.000"
  },
  {
    title: "Laser Acne Treatment",
    description: "Perawatan jerawat dengan teknologi laser untuk hasil yang maksimal.",
    price: "Rp 250.000"
  },
  {
    title: "Hair Removal",
    description: "Hapus bulu tak diinginkan dengan aman dan nyaman.",
    price: "Rp 180.000"
  },
  {
    title: "Peeling Wajah",
    description: "Eksfoliasi lembut untuk kulit halus dan cerah alami.",
    price: "Rp 200.000"
  }
];

const Layanan: React.FC = () => {
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
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '24px'
    },
    card: {
      backgroundColor: '#ffffff',
      border: '1px solid #eee',
      borderRadius: '16px',
      padding: '20px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
    },
    title: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      color: '#cc3366',
      marginBottom: '8px'
    },
    desc: {
      fontSize: '0.95rem',
      color: '#555',
      marginBottom: '12px'
    },
    price: {
      fontWeight: 'bold',
      color: '#333'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Layanan Klinik Cantik 💆‍♀️</h2>
      <div style={styles.grid}>
        {layananData.map((item, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.title}>{item.title}</div>
            <div style={styles.desc}>{item.description}</div>
            <div style={styles.price}>{item.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Layanan;

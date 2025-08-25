import React from 'react';
import { Typography } from 'antd';

const { Text, Link } = Typography;
const logoPrimary = '#005a5f';
const logoAccent = '#d4d600';

const Footer = () => (
  <footer
    style={{
      background: logoPrimary,
      color: logoAccent,
      textAlign: 'center',
      padding: '2rem 0',
      marginTop: '2rem',
      fontFamily: 'Roboto, Arial, sans-serif',
      letterSpacing: '1px'
    }}
  >
    <Text style={{ color: logoAccent, fontWeight: 'bold', fontSize: '1.1rem' }}>
      © {new Date().getFullYear()} Karros Autopartes | Todos los derechos reservados
    </Text>
    <div style={{ marginTop: '0.5rem', fontSize: '1rem' }}>
      <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" style={{ color: logoAccent, marginRight: 16 }}>
        Instagram
      </Link>
      <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" style={{ color: logoAccent }}>
        Facebook
      </Link>
    </div>
  </footer>
);

export default Footer;
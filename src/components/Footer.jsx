import React from 'react'; // fix import


const Footer = () => {
  return (
    <footer style={{
      background: 'var(--color-bg)',
      borderTop: '1px solid var(--color-bg-lighter)',
      padding: '2rem 0',
      textAlign: 'center',
      color: 'var(--color-text-muted)'
    }}>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Shah. All rights reserved</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
          Built with <span style={{ color: 'var(--color-primary)' }}>React</span> & <span style={{ color: 'var(--color-secondary)' }}>JS</span> Vite expertise
        </p>
      </div>
    </footer>
  );
};

export default Footer;

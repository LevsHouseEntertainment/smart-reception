// Footer.jsx
const footerStyles = {
  footer: {
    background: '#545962',
    borderTop: '1px solid #3C4050',
    padding: '48px 72px',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  },
  left: { display: 'flex', flexDirection: 'column', gap: 8 },
  brand: {
    fontFamily: "'Cormorant SC', Georgia, serif",
    fontSize: 15, fontWeight: 300,
    letterSpacing: '0.22em', textTransform: 'uppercase',
    color: '#FAFAF8',
  },
  copy: {
    fontFamily: "'Galano Grotesque', 'Galano Grotesque Alt', sans-serif",
    fontSize: 11, color: 'rgba(255,255,255,0.35)',
    letterSpacing: '0.04em',
  },
  links: { display: 'flex', gap: 24 },
  link: {
    fontFamily: "'Galano Grotesque', 'Galano Grotesque Alt', sans-serif",
    fontSize: 11, fontWeight: 500,
    letterSpacing: '0.10em', textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.5)',
    textDecoration: 'none',
    transition: 'color 200ms',
  },
};

function Footer() {
  return (
    <footer style={footerStyles.footer}>
      <div style={footerStyles.left}>
        <div style={footerStyles.brand}>Justin Levenson</div>
        <div style={footerStyles.copy}>© 2026 · Nashville, TN</div>
      </div>
      <div style={footerStyles.links}>
        <a href="https://substack.com/@fromthecenterwithjustin" target="_blank" rel="noopener" style={footerStyles.link}>From the Center</a>
        <a href="https://www.amazon.com/You-Are-Stronger-Than-THINK/dp/1733764313" target="_blank" rel="noopener" style={footerStyles.link}>The Book</a>
      </div>
    </footer>
  );
}

Object.assign(window, { Footer });

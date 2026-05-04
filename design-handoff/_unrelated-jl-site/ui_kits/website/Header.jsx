// Header.jsx — Justin Levenson website navigation
const headerStyles = {
  nav: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    background: 'rgba(246,244,240,0.92)', backdropFilter: 'blur(8px)',
    borderBottom: '1px solid #D9D5CE',
    height: 64, display: 'flex', alignItems: 'center',
    justifyContent: 'space-between', padding: '0 48px',
  },
  brand: {
    fontFamily: "'Cormorant SC', Georgia, serif",
    fontSize: 17, fontWeight: 300,
    letterSpacing: '0.22em', textTransform: 'uppercase',
    color: '#2E3138', textDecoration: 'none',
  },
  links: { display: 'flex', gap: 32, alignItems: 'center' },
  link: {
    fontFamily: "'Galano Grotesque', 'Galano Grotesque Alt', sans-serif",
    fontSize: 11, fontWeight: 500,
    letterSpacing: '0.12em', textTransform: 'uppercase',
    color: '#545962', textDecoration: 'none',
    transition: 'color 200ms ease',
  },
};

function Header() {
  const [hovered, setHovered] = React.useState(null);
  return (
    <nav style={headerStyles.nav}>
      <a href="#" style={headerStyles.brand}>Justin Levenson</a>
      <div style={headerStyles.links}>
        {[['From the Center', 'https://substack.com/@fromthecenterwithjustin'], ['The Book', 'https://www.amazon.com/You-Are-Stronger-Than-THINK/dp/1733764313']].map(([label, href]) => (
          <a key={label} href={href} target="_blank" rel="noopener"
            style={{...headerStyles.link, color: hovered === label ? '#2E3138' : '#545962', borderBottom: hovered === label ? '1px solid #2E3138' : '1px solid transparent', paddingBottom: 1}}
            onMouseEnter={() => setHovered(label)}
            onMouseLeave={() => setHovered(null)}
          >{label}</a>
        ))}
      </div>
    </nav>
  );
}

Object.assign(window, { Header });

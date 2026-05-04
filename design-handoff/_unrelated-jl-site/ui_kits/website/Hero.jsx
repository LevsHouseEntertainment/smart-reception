// Hero.jsx — Main hero section with email opt-in
const heroStyles = {
  section: {
    minHeight: '100vh', display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    paddingTop: 64,
  },
  left: {
    display: 'flex', flexDirection: 'column', justifyContent: 'center',
    padding: '80px 64px 80px 72px',
    borderRight: '1px solid #D9D5CE',
  },
  eyebrow: {
    fontFamily: "'Galano Grotesque', 'Galano Grotesque Alt', sans-serif",
    fontSize: 10, fontWeight: 500,
    letterSpacing: '0.22em', textTransform: 'uppercase',
    color: '#8A8F9A', marginBottom: 32,
  },
  headline: {
    fontFamily: "'Cormorant', Georgia, serif",
    fontSize: 'clamp(36px, 4vw, 58px)',
    fontWeight: 300, lineHeight: 1.15,
    letterSpacing: '-0.01em',
    color: '#2E3138', marginBottom: 28,
  },
  em: { fontStyle: 'italic' },
  body: {
    fontFamily: "'Galano Grotesque', 'Galano Grotesque Alt', sans-serif",
    fontSize: 17, lineHeight: 1.7,
    color: '#545962', maxWidth: '52ch',
    marginBottom: 40,
  },
  form: { display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 380 },
  input: {
    fontFamily: "'Galano Grotesque', 'Galano Grotesque Alt', sans-serif",
    fontSize: 14, padding: '14px 16px',
    border: '1px solid #D9D5CE',
    borderRadius: 2, background: '#FAFAF8',
    color: '#2E3138', outline: 'none',
    transition: 'border-color 200ms',
  },
  btnPrimary: {
    fontFamily: "'Galano Grotesque', 'Galano Grotesque Alt', sans-serif",
    fontSize: 11, fontWeight: 500,
    letterSpacing: '0.12em', textTransform: 'uppercase',
    background: '#2E3138', color: '#FAFAF8',
    border: 'none', borderRadius: 2,
    padding: '15px 32px', cursor: 'pointer',
    transition: 'background 200ms',
    alignSelf: 'flex-start',
  },
  success: {
    fontFamily: "'Galano Grotesque', 'Galano Grotesque Alt', sans-serif",
    fontSize: 14, color: '#545962',
    lineHeight: 1.6,
  },
  right: {
    position: 'relative', overflow: 'hidden',
    minHeight: 500,
  },
  photo: {
    width: '100%', height: '100%',
    objectFit: 'cover', objectPosition: 'center top',
    display: 'block',
  },
  photoFallback: {
    width: '100%', height: '100%',
    background: '#545962',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  quoteOverlay: {
    position: 'absolute', bottom: 0, left: 0, right: 0,
    background: 'linear-gradient(to top, rgba(27,31,40,0.85) 0%, transparent 100%)',
    padding: '48px 40px 36px',
  },
  quoteText: {
    fontFamily: "'Cormorant', Georgia, serif",
    fontSize: 18, fontStyle: 'italic', fontWeight: 300,
    color: 'rgba(255,255,255,0.92)', lineHeight: 1.5,
    maxWidth: '38ch',
  },
};

function Hero({ emailSubmitted, onSubmit }) {
  const [email, setEmail] = React.useState('');
  const [btnHover, setBtnHover] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (email) onSubmit();
  }

  return (
    <section style={heroStyles.section}>
      <div style={heroStyles.left}>
        <div style={heroStyles.eyebrow}>A free gift for you</div>
        <h1 style={heroStyles.headline}>
          This is not a mindfulness <em style={heroStyles.em}>program.</em>
        </h1>
        <p style={heroStyles.body}>
          It's what I actually used — on a radiation table, in the silence after everyone went home and I was sitting alone with all of it.<br/><br/>
          A breath. A few words. An anchor.
        </p>
        {!emailSubmitted ? (
          <form style={heroStyles.form} onSubmit={handleSubmit}>
            <input
              type="email" placeholder="Your email address"
              value={email} onChange={e => setEmail(e.target.value)}
              style={heroStyles.input} required
            />
            <button
              type="submit"
              style={{...heroStyles.btnPrimary, background: btnHover ? '#545962' : '#2E3138'}}
              onMouseEnter={() => setBtnHover(true)}
              onMouseLeave={() => setBtnHover(false)}
            >Send it to me</button>
          </form>
        ) : (
          <div style={heroStyles.success}>
            You're in. I'm glad you're here.<br/><br/>
            <a href="https://www.amazon.com/You-Are-Stronger-Than-THINK/dp/1733764313"
              target="_blank" rel="noopener"
              style={{color:'#2E3138', textUnderlineOffset:3, fontWeight:500}}>
              You Are Stronger Than You Think →
            </a>
          </div>
        )}
      </div>
      <div style={heroStyles.right}>
        <img
          src="../../assets/portrait_0.jpg"
          alt="Justin Levenson"
          style={heroStyles.photo}
          onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }}
        />
        <div style={{...heroStyles.photoFallback, display:'none'}}>
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <path d="M10 10 L10 42 C10 49 16 52 22 50 C26 49 28 46 28 42" stroke="#FAFAF8" strokeWidth="3" strokeLinecap="round" fill="none"/>
            <path d="M32 10 L32 50 L50 50" stroke="#FAFAF8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        </div>
        <div style={heroStyles.quoteOverlay}>
          <p style={heroStyles.quoteText}>
            "This is going to be the most positive experience of my life."
          </p>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero });

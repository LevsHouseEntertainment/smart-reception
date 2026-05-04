// BookSection.jsx — Book showcase + features + story
const bookStyles = {
  // Book intro — dark section
  darkSection: {
    background: '#1B1F28',
    padding: '96px 72px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 80,
    alignItems: 'center',
  },
  bookCover: {
    width: '100%', maxWidth: 280,
    aspectRatio: '2/3',
    background: '#2E3138',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
    borderRadius: 1,
    flexDirection: 'column', gap: 16,
  },
  bookTitle: {
    fontFamily: "'Cormorant SC', Georgia, serif",
    fontSize: 20, fontWeight: 300,
    letterSpacing: '0.16em', textTransform: 'uppercase',
    color: '#FAFAF8', textAlign: 'center',
    lineHeight: 1.4, padding: '0 24px',
  },
  bookMeta: {
    fontFamily: "'Galano Grotesque', 'Galano Grotesque Alt', sans-serif",
    fontSize: 10, letterSpacing: '0.18em',
    textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)',
  },
  bookRight: { display: 'flex', flexDirection: 'column', gap: 24 },
  eyebrow: {
    fontFamily: "'Galano Grotesque', 'Galano Grotesque Alt', sans-serif",
    fontSize: 10, fontWeight: 500,
    letterSpacing: '0.22em', textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.35)',
  },
  bookHeadline: {
    fontFamily: "'Cormorant', Georgia, serif",
    fontSize: 42, fontWeight: 300,
    lineHeight: 1.2, color: '#FAFAF8',
    letterSpacing: '-0.01em',
  },
  bookBody: {
    fontFamily: "'Galano Grotesque', 'Galano Grotesque Alt', sans-serif",
    fontSize: 16, lineHeight: 1.75,
    color: 'rgba(255,255,255,0.65)',
    maxWidth: '48ch',
  },
  btnLight: {
    display: 'inline-flex', alignItems: 'center',
    fontFamily: "'Galano Grotesque', 'Galano Grotesque Alt', sans-serif",
    fontSize: 11, fontWeight: 500,
    letterSpacing: '0.12em', textTransform: 'uppercase',
    background: '#FAFAF8', color: '#1B1F28',
    border: 'none', borderRadius: 2,
    padding: '14px 32px', cursor: 'pointer',
    textDecoration: 'none', alignSelf: 'flex-start',
    transition: 'opacity 200ms',
  },

  // Features grid
  featuresSection: {
    background: '#F6F4F0',
    padding: '96px 72px',
    borderTop: '1px solid #D9D5CE',
  },
  sectionEyebrow: {
    fontFamily: "'Galano Grotesque', 'Galano Grotesque Alt', sans-serif",
    fontSize: 10, fontWeight: 500,
    letterSpacing: '0.22em', textTransform: 'uppercase',
    color: '#8A8F9A', marginBottom: 48,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 1,
    background: '#D9D5CE',
    border: '1px solid #D9D5CE',
  },
  featureCard: {
    background: '#FAFAF8',
    padding: '36px 28px',
  },
  featureNum: {
    fontFamily: "'Cormorant SC', Georgia, serif",
    fontSize: 32, fontWeight: 300,
    color: '#D9D5CE', letterSpacing: '0.1em',
    marginBottom: 16,
  },
  featureTitle: {
    fontFamily: "'Galano Grotesque', 'Galano Grotesque Alt', sans-serif",
    fontSize: 14, fontWeight: 600,
    color: '#2E3138', marginBottom: 10,
    lineHeight: 1.3,
  },
  featureBody: {
    fontFamily: "'Galano Grotesque', 'Galano Grotesque Alt', sans-serif",
    fontSize: 13, lineHeight: 1.65,
    color: '#545962',
  },

  // Story section
  storySection: {
    background: '#FAFAF8',
    padding: '96px 72px',
    borderTop: '1px solid #D9D5CE',
    maxWidth: 720,
    margin: '0 auto',
    textAlign: 'center',
  },
  storyDate: {
    fontFamily: "'Galano Grotesque', 'Galano Grotesque Alt', sans-serif",
    fontSize: 10, fontWeight: 500,
    letterSpacing: '0.22em', textTransform: 'uppercase',
    color: '#8A8F9A', marginBottom: 32,
  },
  storyStat: {
    fontFamily: "'Cormorant SC', Georgia, serif",
    fontSize: 64, fontWeight: 300,
    color: '#2E3138', letterSpacing: '0.06em',
    lineHeight: 1, marginBottom: 8,
  },
  storyStatLabel: {
    fontFamily: "'Galano Grotesque', 'Galano Grotesque Alt', sans-serif",
    fontSize: 11, fontWeight: 500,
    letterSpacing: '0.16em', textTransform: 'uppercase',
    color: '#8A8F9A', marginBottom: 40,
  },
  storyBody: {
    fontFamily: "'Galano Grotesque', 'Galano Grotesque Alt', sans-serif",
    fontSize: 17, lineHeight: 1.8,
    color: '#545962',
  },
  divider: {
    border: 'none', borderTop: '1px solid #D9D5CE',
    margin: '48px auto', width: 48,
  },
};

const features = [
  { num: '01', title: 'Think It. See It. Feel It.', body: 'The three-step framework — Affirm, Visualize, Feel — that I used from the moment of diagnosis.' },
  { num: '02', title: 'Healing affirmations', body: 'The exact words I repeated on the radiation table, during chemo, and in the quiet moments of fear.' },
  { num: '03', title: 'A calming breathing practice', body: 'I used this to get through 33 radiation treatments — strapped to a table by a mask, alone with my breath.' },
  { num: '04', title: 'Notes from the center', body: 'Occasional emails written the way I write everything — warm, real, never preachy.' },
];

function BookSection() {
  return (
    <React.Fragment>
      {/* Dark book showcase */}
      <section style={bookStyles.darkSection}>
        <div>
          <div style={bookStyles.bookCover}>
            <img
              src="../../assets/brand_5.jpg"
              alt="You Are Stronger Than You THINK"
              style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:1,opacity:0}}
              onLoad={e => e.target.style.opacity=1}
            />
            {/* Fallback text cover */}
            <div style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:12,padding:'0 20px',pointerEvents:'none'}}>
              <div style={bookStyles.bookTitle}>You Are Stronger<br/>Than You<br/>THINK</div>
              <div style={bookStyles.bookMeta}>Justin Levenson</div>
            </div>
          </div>
        </div>
        <div style={bookStyles.bookRight}>
          <div style={bookStyles.eyebrow}>Now available</div>
          <h2 style={bookStyles.bookHeadline}>
            You Are Stronger Than You THINK
          </h2>
          <p style={bookStyles.bookBody}>
            Brain cancer, brain surgery, 15 months of treatment, and the mind-body practices that changed everything. Written for anyone who needs hope right now.
          </p>
          <a href="https://www.amazon.com/You-Are-Stronger-Than-THINK/dp/1733764313"
            target="_blank" rel="noopener"
            style={bookStyles.btnLight}>Read it on Amazon</a>
        </div>
      </section>

      {/* Features grid */}
      <section style={bookStyles.featuresSection}>
        <div style={bookStyles.sectionEyebrow}>What you'll receive</div>
        <div style={bookStyles.grid}>
          {features.map(f => (
            <div key={f.num} style={bookStyles.featureCard}>
              <div style={bookStyles.featureNum}>{f.num}</div>
              <div style={bookStyles.featureTitle}>{f.title}</div>
              <div style={bookStyles.featureBody}>{f.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Story section */}
      <section style={{...bookStyles.featuresSection, borderTop:'1px solid #D9D5CE'}}>
        <div style={{maxWidth:680, margin:'0 auto', textAlign:'center'}}>
          <div style={bookStyles.storyDate}>February 3rd, 2014</div>
          <div style={bookStyles.storyStat}>35</div>
          <div style={bookStyles.storyStatLabel}>Years old at diagnosis</div>
          <hr style={bookStyles.divider}/>
          <p style={bookStyles.storyBody}>
            I was 35. I had just had a seizure at my desk at SESAC in Nashville. Five doctors walked into my ER room. And somehow — I was at peace.
          </p>
          <p style={{...bookStyles.storyBody, marginTop:24}}>
            What followed was brain surgery, 15 months of chemotherapy and radiation, and the deepest education of my life. The mind-body tools I'd been learning for years became survival. I wrote them down. I lived them. And I'm still living them.
          </p>
          <p style={{...bookStyles.storyBody, marginTop:24, fontStyle:'italic', color:'#8A8F9A'}}>
            The practices work. I want to share them with you.
          </p>
        </div>
      </section>
    </React.Fragment>
  );
}

Object.assign(window, { BookSection });

/* Smart Reception — Wordmark + Foundations modules
   Wordmark: typographic mark + soundwave glyph (subtle motif: AI listens).
   Foundations: color, type, spacing, radii, shadow, motion specimens. */

// ── Wordmark ─────────────────────────────────────────────────────────────
function Wordmark({ size = 'md', tone = 'brand' }) {
  const heights = { sm: 20, md: 28, lg: 40, xl: 56 };
  const h = heights[size] || 28;
  const fg = tone === 'inverse' ? 'var(--sr-color-text-inverse)' :
             tone === 'mono'    ? 'currentColor' :
                                  'var(--sr-color-text)';
  const accent = tone === 'mono' ? 'currentColor' : 'var(--sr-color-accent)';
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: h * 0.36,
      color: fg, fontFamily: 'var(--sr-font-display)',
      fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1,
      fontSize: h * 0.7,
    }}>
      <SoundGlyph size={h} color={accent} />
      <span>Smart<span style={{ fontWeight: 500, opacity: 0.72 }}>·</span>Reception</span>
    </span>
  );
}

// Soundwave glyph — five bars, asymmetric, gentle.
function SoundGlyph({ size = 28, color = 'currentColor', animated = false }) {
  const bars = [0.45, 0.85, 0.6, 1.0, 0.55];
  const w = size, h = size;
  const barW = w * 0.11;
  const gap = w * 0.06;
  const total = bars.length * barW + (bars.length - 1) * gap;
  const x0 = (w - total) / 2;
  const cy = h / 2;
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} aria-hidden="true">
      <circle cx={w/2} cy={cy} r={w/2 - 0.5} fill={color} opacity={0.12} />
      {bars.map((b, i) => {
        const bh = h * 0.62 * b;
        const x = x0 + i * (barW + gap);
        return (
          <rect key={i} x={x} y={cy - bh/2} width={barW} height={bh}
                rx={barW/2} ry={barW/2} fill={color}>
            {animated && (
              <animate attributeName="height"
                values={`${bh};${bh*0.5};${bh}`}
                dur={`${1.2 + i * 0.15}s`} repeatCount="indefinite" />
            )}
          </rect>
        );
      })}
    </svg>
  );
}

// ── Color ────────────────────────────────────────────────────────────────
function ColorSection() {
  const palettes = [
    { id: 'linen',  name: 'Linen & Slate', note: 'Selected · premium, dependable' },
    { id: 'sage',   name: 'Sage & Clay',   note: 'Alternate · grounded, warm-cool' },
    { id: 'hearth', name: 'Hearth & Oak',  note: 'Alternate · warmest, neighborhood' },
  ];
  const semantic = [
    { label: 'Brand',   token: '--sr-color-brand',         text: 'on-brand' },
    { label: 'Accent',  token: '--sr-color-accent',        text: 'on-accent' },
    { label: 'Success', token: '--sr-color-success',       text: 'inverse' },
    { label: 'Warning', token: '--sr-color-warning',       text: 'inverse' },
    { label: 'Danger',  token: '--sr-color-danger',        text: 'inverse' },
    { label: 'Info',    token: '--sr-color-info',          text: 'inverse' },
  ];
  const surfaces = [
    { label: 'BG',           token: '--sr-color-bg' },
    { label: 'BG · Sunken',  token: '--sr-color-bg-sunken' },
    { label: 'BG · Elevated',token: '--sr-color-bg-elevated' },
    { label: 'Surface',      token: '--sr-color-surface' },
    { label: 'Border',       token: '--sr-color-border' },
    { label: 'Border · Strong', token: '--sr-color-border-strong' },
  ];
  const text = [
    { label: 'Text',         token: '--sr-color-text' },
    { label: 'Text · Muted', token: '--sr-color-text-muted' },
    { label: 'Text · Subtle',token: '--sr-color-text-subtle' },
    { label: 'Text · Disabled', token: '--sr-color-text-disabled' },
  ];

  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}
           className="sr-palette-grid">
        {palettes.map(p => (
          <div key={p.id} data-palette={p.id} style={{
            background: 'var(--sr-color-bg)',
            border: '1px solid var(--sr-color-border)',
            borderRadius: 'var(--sr-radius-lg)',
            padding: 20, display: 'flex', flexDirection: 'column', gap: 14,
            color: 'var(--sr-color-text)',
          }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontFamily: 'var(--sr-font-display)', fontWeight: 600, fontSize: 18, letterSpacing: '-0.01em' }}>{p.name}</div>
                <div style={{ fontSize: 12, color: 'var(--sr-color-text-subtle)', marginTop: 2 }}>{p.note}</div>
              </div>
              <code style={{ fontSize: 11, color: 'var(--sr-color-text-subtle)' }}>{p.id}</code>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 4 }}>
              {['--sr-color-bg','--sr-color-brand','--sr-color-accent','--sr-color-success','--sr-color-warning','--sr-color-danger']
                .map(t => (
                <div key={t} style={{
                  height: 40, background: `var(${t})`,
                  borderRadius: 'var(--sr-radius-sm)',
                  border: '1px solid var(--sr-color-border-subtle)',
                }} />
              ))}
            </div>
            <div style={{ fontSize: 13, color: 'var(--sr-color-text-muted)', lineHeight: 1.5 }}>
              {p.id === 'linen' && 'Slate-blue reads as serious and reliable — the kind of brand a busy operator trusts on first call. Amber accent keeps it warm so CTAs feel inviting, not corporate.'}
              {p.id === 'sage' && 'Sage reads as calm and grounded — outdoors, dependable. Clay accent makes CTAs unmistakable without shouting.'}
              {p.id === 'hearth' && 'Oak brown + rust feels like a neighborhood storefront. Warmest direction; great for hands-on trades.'}
            </div>
          </div>
        ))}
      </div>

      <div className="sr-subsection-head">Semantic roles · current palette</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
        {semantic.map(s => (
          <div key={s.token} style={{
            background: `var(${s.token})`,
            color: s.text === 'on-brand' ? 'var(--sr-color-brand-fg)' :
                   s.text === 'on-accent' ? 'var(--sr-color-accent-fg)' :
                   'var(--sr-color-text-inverse)',
            padding: '20px 18px', borderRadius: 'var(--sr-radius-md)',
            display: 'flex', flexDirection: 'column', gap: 6,
          }}>
            <div style={{ fontWeight: 600, fontSize: 15 }}>{s.label}</div>
            <code style={{ fontSize: 11, opacity: 0.78 }}>{s.token}</code>
          </div>
        ))}
      </div>

      <div className="sr-subsection-head">Surfaces · borders</div>
      <div className="sr-grid-3">
        {surfaces.map(s => (
          <div key={s.token} style={{
            background: `var(${s.token})`,
            border: '1px solid var(--sr-color-border-subtle)',
            borderRadius: 'var(--sr-radius-md)',
            padding: '20px 18px',
            display: 'flex', flexDirection: 'column', gap: 4, height: 80,
            justifyContent: 'flex-end',
          }}>
            <div style={{ fontWeight: 600, fontSize: 13 }}>{s.label}</div>
            <code style={{ fontSize: 11, color: 'var(--sr-color-text-subtle)' }}>{s.token}</code>
          </div>
        ))}
      </div>

      <div className="sr-subsection-head">Text colors</div>
      <div style={{
        background: 'var(--sr-color-surface)',
        border: '1px solid var(--sr-color-border)',
        borderRadius: 'var(--sr-radius-md)',
        padding: 24, display: 'flex', flexDirection: 'column', gap: 12,
      }}>
        {text.map(t => (
          <div key={t.token} style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
            <div style={{ width: 140, color: `var(${t.token})`, fontSize: 16, fontWeight: 500 }}>
              {t.label}
            </div>
            <code style={{ color: 'var(--sr-color-text-subtle)', fontSize: 12 }}>{t.token}</code>
          </div>
        ))}
      </div>
    </>
  );
}

// ── Type ─────────────────────────────────────────────────────────────────
function TypeSection() {
  const scale = [
    { label: 'Display 5xl', size: '64px', weight: 600, sample: 'Calm, capable answers.' },
    { label: 'Display 4xl', size: '48px', weight: 600, sample: 'Welcome to Smart Reception.' },
    { label: 'Heading 3xl', size: '36px', weight: 600, sample: 'Set up your call agent' },
    { label: 'Heading 2xl', size: '28px', weight: 600, sample: 'How customers reach you' },
    { label: 'Heading xl',  size: '22px', weight: 600, sample: 'Pick a greeting' },
    { label: 'Heading lg',  size: '18px', weight: 600, sample: 'Hours & availability' },
    { label: 'Body md',     size: '16px', weight: 400, sample: 'We answer every call so you can stay on the job. No app to learn — set it up once and we handle the rest.' },
    { label: 'Body base',   size: '15px', weight: 400, sample: 'Your agent will introduce itself, take down the customer\u2019s name, and book the visit.' },
    { label: 'Body sm',     size: '13px', weight: 400, sample: 'Used for secondary content, captions, and meta information across the product.' },
    { label: 'Mono xs',     size: '12px', weight: 400, sample: 'TUE · 9:30 AM · 555-0148', mono: true },
  ];
  return (
    <>
      <div className="sr-grid-2" style={{ marginBottom: 24 }}>
        <div style={{
          background: 'var(--sr-color-surface)',
          border: '1px solid var(--sr-color-border)',
          borderRadius: 'var(--sr-radius-lg)',
          padding: 28,
        }}>
          <div style={{ fontFamily: 'var(--sr-font-mono)', fontSize: 11, color: 'var(--sr-color-text-subtle)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 12 }}>Display · Plus Jakarta Sans</div>
          <div style={{ fontFamily: 'var(--sr-font-display)', fontWeight: 600, fontSize: 56, letterSpacing: '-0.025em', lineHeight: 1.05, marginBottom: 16 }}>Aa</div>
          <div style={{ fontFamily: 'var(--sr-font-display)', fontSize: 14, color: 'var(--sr-color-text-muted)' }}>
            ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
            abcdefghijklmnopqrstuvwxyz<br/>
            0123456789 · — · &amp; · @
          </div>
        </div>
        <div style={{
          background: 'var(--sr-color-surface)',
          border: '1px solid var(--sr-color-border)',
          borderRadius: 'var(--sr-radius-lg)',
          padding: 28,
        }}>
          <div style={{ fontFamily: 'var(--sr-font-mono)', fontSize: 11, color: 'var(--sr-color-text-subtle)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 12 }}>Body · Figtree</div>
          <div style={{ fontFamily: 'var(--sr-font-body)', fontWeight: 500, fontSize: 56, letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: 16 }}>Aa</div>
          <div style={{ fontFamily: 'var(--sr-font-body)', fontSize: 14, color: 'var(--sr-color-text-muted)' }}>
            ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
            abcdefghijklmnopqrstuvwxyz<br/>
            0123456789 · — · &amp; · @
          </div>
        </div>
      </div>

      <div className="sr-subsection-head">Scale</div>
      <div style={{
        background: 'var(--sr-color-surface)',
        border: '1px solid var(--sr-color-border)',
        borderRadius: 'var(--sr-radius-lg)',
        overflow: 'hidden',
      }}>
        {scale.map((s, i) => (
          <div key={s.label} style={{
            display: 'grid', gridTemplateColumns: '160px 1fr 80px',
            gap: 24, alignItems: 'baseline',
            padding: '20px 28px',
            borderTop: i === 0 ? 0 : '1px solid var(--sr-color-border-subtle)',
          }}>
            <div style={{ fontFamily: 'var(--sr-font-mono)', fontSize: 11, color: 'var(--sr-color-text-subtle)', letterSpacing: '.04em', textTransform: 'uppercase' }}>
              {s.label}
            </div>
            <div style={{
              fontFamily: s.mono ? 'var(--sr-font-mono)' : (parseInt(s.size) >= 22 ? 'var(--sr-font-display)' : 'var(--sr-font-body)'),
              fontSize: s.size,
              fontWeight: s.weight,
              letterSpacing: parseInt(s.size) >= 28 ? '-0.02em' : 'normal',
              lineHeight: parseInt(s.size) >= 28 ? 1.1 : 1.5,
            }}>
              {s.sample}
            </div>
            <div style={{ textAlign: 'right', fontFamily: 'var(--sr-font-mono)', fontSize: 11, color: 'var(--sr-color-text-subtle)' }}>
              {s.size}
            </div>
          </div>
        ))}
      </div>

      <div className="sr-subsection-head">Voice — onboarding tone</div>
      <div className="sr-grid-2">
        <VoiceCard label="Plain-spoken" body="We answer your calls. No app to learn. Set it up once — we handle the rest." />
        <VoiceCard label="Encouraging coach" body="Nice work — you've finished step 2. One more and your agent goes live. ⏎" />
        <VoiceCard label="Concise feedback" body="Saved. We'll use this greeting on every call after 5pm." muted />
        <VoiceCard label="Errors, never harsh" body="Couldn't reach that number. Want to try again, or skip for now?" tone="warning" />
      </div>
    </>
  );
}

function VoiceCard({ label, body, tone, muted }) {
  return (
    <div style={{
      background: 'var(--sr-color-surface)',
      border: '1px solid var(--sr-color-border)',
      borderRadius: 'var(--sr-radius-md)',
      padding: '20px 22px',
      display: 'flex', flexDirection: 'column', gap: 10,
    }}>
      <div style={{
        fontFamily: 'var(--sr-font-mono)', fontSize: 11, letterSpacing: '.08em',
        textTransform: 'uppercase', color: 'var(--sr-color-text-subtle)',
      }}>{label}</div>
      <div style={{
        fontSize: 16, color: muted ? 'var(--sr-color-text-muted)' : 'var(--sr-color-text)',
        lineHeight: 1.5,
        fontStyle: tone === 'warning' ? 'normal' : 'normal',
      }}>
        “{body}”
      </div>
    </div>
  );
}

// ── Spacing / Radii / Shadow / Motion ────────────────────────────────────
function FoundationsSection() {
  const spaceTokens = [
    { token: '--sr-space-1', value: '4px' },
    { token: '--sr-space-2', value: '8px' },
    { token: '--sr-space-3', value: '12px' },
    { token: '--sr-space-4', value: '16px' },
    { token: '--sr-space-6', value: '24px' },
    { token: '--sr-space-8', value: '32px' },
    { token: '--sr-space-12', value: '48px' },
    { token: '--sr-space-16', value: '64px' },
  ];
  const radii = [
    { token: '--sr-radius-sm',  value: '6px',  label: 'sm' },
    { token: '--sr-radius-md',  value: '10px', label: 'md' },
    { token: '--sr-radius-lg',  value: '14px', label: 'lg' },
    { token: '--sr-radius-xl',  value: '20px', label: 'xl' },
    { token: '--sr-radius-2xl', value: '28px', label: '2xl' },
    { token: '--sr-radius-pill',value: '999px',label: 'pill' },
  ];
  const shadows = [
    { token: '--sr-shadow-xs', label: 'xs · interactive resting' },
    { token: '--sr-shadow-sm', label: 'sm · cards' },
    { token: '--sr-shadow-md', label: 'md · hover lift' },
    { token: '--sr-shadow-lg', label: 'lg · popovers' },
    { token: '--sr-shadow-xl', label: 'xl · modals' },
  ];

  return (
    <>
      <div className="sr-subsection-head">Spacing · 4px base</div>
      <div style={{
        background: 'var(--sr-color-surface)',
        border: '1px solid var(--sr-color-border)',
        borderRadius: 'var(--sr-radius-md)',
        padding: 24,
        display: 'flex', flexDirection: 'column', gap: 12,
      }}>
        {spaceTokens.map(s => (
          <div key={s.token} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <code style={{ width: 140, fontSize: 12, color: 'var(--sr-color-text-subtle)' }}>{s.token}</code>
            <div style={{ width: 60, fontSize: 13, fontFamily: 'var(--sr-font-mono)', color: 'var(--sr-color-text-muted)' }}>{s.value}</div>
            <div style={{ height: 14, width: s.value, background: 'var(--sr-color-brand-soft)', borderRadius: 3 }} />
          </div>
        ))}
      </div>

      <div className="sr-subsection-head">Radii</div>
      <div className="sr-grid-3">
        {radii.map(r => (
          <div key={r.token} style={{
            background: 'var(--sr-color-surface)',
            border: '1px solid var(--sr-color-border)',
            padding: 20, borderRadius: 'var(--sr-radius-md)',
            display: 'flex', alignItems: 'center', gap: 16,
          }}>
            <div style={{
              width: 56, height: 56,
              background: 'var(--sr-color-brand-soft)',
              border: '1px solid var(--sr-color-brand)',
              borderRadius: `var(${r.token})`,
            }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <div style={{ fontWeight: 600, fontSize: 14 }}>{r.label}</div>
              <code style={{ fontSize: 11, color: 'var(--sr-color-text-subtle)' }}>{r.value}</code>
            </div>
          </div>
        ))}
      </div>

      <div className="sr-subsection-head">Elevation</div>
      <div className="sr-grid-3">
        {shadows.map(s => (
          <div key={s.token} style={{
            background: 'var(--sr-color-bg-sunken)',
            padding: 32, borderRadius: 'var(--sr-radius-md)',
            display: 'flex', flexDirection: 'column', gap: 16,
          }}>
            <div style={{
              height: 80, background: 'var(--sr-color-surface)',
              borderRadius: 'var(--sr-radius-md)',
              boxShadow: `var(${s.token})`,
              border: '1px solid var(--sr-color-border-subtle)',
            }} />
            <div>
              <div style={{ fontWeight: 600, fontSize: 13 }}>{s.label}</div>
              <code style={{ fontSize: 11, color: 'var(--sr-color-text-subtle)' }}>{s.token}</code>
            </div>
          </div>
        ))}
      </div>

      <div className="sr-subsection-head">Motion</div>
      <div className="sr-grid-3">
        <MotionCard label="fast" duration="120ms" desc="Toggles, segmented controls" />
        <MotionCard label="base" duration="200ms" desc="Default — buttons, hovers" />
        <MotionCard label="slow" duration="320ms" desc="Modal entry, page transitions" />
      </div>
    </>
  );
}

function MotionCard({ label, duration, desc }) {
  const [on, setOn] = React.useState(false);
  React.useEffect(() => {
    const t = setInterval(() => setOn(v => !v), 1400);
    return () => clearInterval(t);
  }, []);
  return (
    <div style={{
      background: 'var(--sr-color-surface)',
      border: '1px solid var(--sr-color-border)',
      borderRadius: 'var(--sr-radius-md)',
      padding: 20,
      display: 'flex', flexDirection: 'column', gap: 12,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <div style={{ fontWeight: 600, fontSize: 14 }}>{label}</div>
        <code style={{ fontSize: 11, color: 'var(--sr-color-text-subtle)' }}>{duration}</code>
      </div>
      <div style={{
        background: 'var(--sr-color-bg-sunken)',
        height: 36, borderRadius: 'var(--sr-radius-pill)',
        position: 'relative', padding: 4,
      }}>
        <div style={{
          width: 28, height: 28, borderRadius: '50%',
          background: 'var(--sr-color-brand)',
          position: 'absolute',
          left: on ? 'calc(100% - 32px)' : 4,
          top: 4,
          transition: `left ${duration} var(--sr-ease-out)`,
        }} />
      </div>
      <div style={{ fontSize: 12, color: 'var(--sr-color-text-muted)' }}>{desc}</div>
    </div>
  );
}

Object.assign(window, {
  Wordmark, SoundGlyph,
  ColorSection, TypeSection, FoundationsSection, VoiceCard, MotionCard,
});

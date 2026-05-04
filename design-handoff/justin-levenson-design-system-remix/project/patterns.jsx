/* Smart Reception — Onboarding & Call-related patterns */

// ── Stepper ──────────────────────────────────────────────────────────────
function Stepper({ steps, current }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 0, width: '100%' }}>
      {steps.map((s, i) => {
        const state = i < current ? 'done' : i === current ? 'active' : 'todo';
        return (
          <React.Fragment key={s}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, flexShrink: 0 }}>
              <div style={{
                width: 32, height: 32, borderRadius: '50%',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 13, fontWeight: 700,
                background: state === 'done' ? 'var(--sr-color-brand)' :
                            state === 'active' ? 'var(--sr-color-accent)' :
                            'var(--sr-color-bg-sunken)',
                color: state === 'todo' ? 'var(--sr-color-text-subtle)' : '#fff',
                border: state === 'todo' ? '1.5px solid var(--sr-color-border-strong)' : 'none',
              }}>
                {state === 'done' ? '✓' : i + 1}
              </div>
              <div style={{
                fontSize: 12, fontWeight: state === 'active' ? 600 : 500,
                color: state === 'todo' ? 'var(--sr-color-text-subtle)' :
                       state === 'active' ? 'var(--sr-color-text)' :
                       'var(--sr-color-text-muted)',
                whiteSpace: 'nowrap',
              }}>{s}</div>
            </div>
            {i < steps.length - 1 && (
              <div style={{
                flex: 1, height: 2, marginBottom: 24, marginTop: 0,
                background: i < current ? 'var(--sr-color-brand)' : 'var(--sr-color-border)',
              }} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

// ── Progress Bar ─────────────────────────────────────────────────────────
function Progress({ value, label, total }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {label && (
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
          <span style={{ color: 'var(--sr-color-text-muted)' }}>{label}</span>
          <span style={{ fontFamily: 'var(--sr-font-mono)', color: 'var(--sr-color-text-subtle)' }}>
            {Math.round(value)}{total ? ` / ${total}` : '%'}
          </span>
        </div>
      )}
      <div style={{ height: 8, background: 'var(--sr-color-bg-sunken)', borderRadius: 999, overflow: 'hidden' }}>
        <div style={{
          height: '100%', width: `${value}%`,
          background: 'var(--sr-color-brand)',
          borderRadius: 999,
          transition: 'width var(--sr-dur-slow) var(--sr-ease-out)',
        }} />
      </div>
    </div>
  );
}

// ── Onboarding Step Card (full pattern) ──────────────────────────────────
function OnboardingStep() {
  const [greeting, setGreeting] = React.useState("Hi, thanks for calling Pete's Plumbing — how can I help today?");
  const [voice, setVoice] = React.useState('warm-male');
  return (
    <div style={{
      background: 'var(--sr-color-surface)',
      border: '1px solid var(--sr-color-border)',
      borderRadius: 'var(--sr-radius-xl)',
      padding: 40, maxWidth: 640, margin: '0 auto', width: '100%',
      display: 'flex', flexDirection: 'column', gap: 28,
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span style={{
          fontFamily: 'var(--sr-font-mono)', fontSize: 12,
          letterSpacing: '0.08em', textTransform: 'uppercase',
          color: 'var(--sr-color-accent)',
        }}>Step 2 of 4</span>
        <h3 style={{
          fontFamily: 'var(--sr-font-display)', fontSize: 32,
          letterSpacing: '-0.02em', fontWeight: 600, lineHeight: 1.1,
        }}>How should we answer?</h3>
        <p style={{ fontSize: 16, color: 'var(--sr-color-text-muted)', lineHeight: 1.55, marginTop: 4 }}>
          We'll greet every caller in your voice. You can change this anytime.
        </p>
      </div>

      <Input label="Greeting" value={greeting} onChange={(e) => setGreeting(e.target.value)} hint="Caller hears this when the line picks up." />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <span style={{ fontSize: 13, fontWeight: 600 }}>Voice</span>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          <Radio checked={voice === 'warm-male'} onChange={() => setVoice('warm-male')}
                 label="Warm · masculine" desc="Steady, friendly. Plays well in trades." />
          <Radio checked={voice === 'warm-female'} onChange={() => setVoice('warm-female')}
                 label="Warm · feminine" desc="Calm, clear. Receptionist feel." />
        </div>
      </div>

      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        paddingTop: 20, borderTop: '1px solid var(--sr-color-border-subtle)',
      }}>
        <Button variant="ghost" size="md">← Back</Button>
        <Button variant="primary" size="lg" trailing="→">Continue</Button>
      </div>
    </div>
  );
}

// ── Empty State ──────────────────────────────────────────────────────────
function EmptyState() {
  return (
    <div style={{
      background: 'var(--sr-color-surface)',
      border: '1px dashed var(--sr-color-border-strong)',
      borderRadius: 'var(--sr-radius-lg)',
      padding: '56px 32px', textAlign: 'center',
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14,
    }}>
      <div style={{
        width: 64, height: 64, borderRadius: '50%',
        background: 'var(--sr-color-brand-soft)',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 6,
      }}>
        <SoundGlyph size={36} color="var(--sr-color-brand)" />
      </div>
      <h4 style={{ fontFamily: 'var(--sr-font-display)', fontSize: 20, fontWeight: 600 }}>
        No calls yet today
      </h4>
      <p style={{ color: 'var(--sr-color-text-muted)', maxWidth: 360, lineHeight: 1.55, fontSize: 14 }}>
        Your agent is live and ready. When a customer calls, you'll see the call here in real time.
      </p>
      <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
        <Button variant="secondary" size="md">Test a call</Button>
        <Button variant="ghost" size="md">Share your number</Button>
      </div>
    </div>
  );
}

// ── Live Call Card ───────────────────────────────────────────────────────
function LiveCallCard() {
  return (
    <div style={{
      background: 'var(--sr-color-surface)',
      border: '1px solid var(--sr-color-border)',
      borderRadius: 'var(--sr-radius-lg)',
      overflow: 'hidden',
      display: 'flex', flexDirection: 'column',
    }}>
      <div style={{
        padding: '14px 20px',
        background: 'linear-gradient(180deg, var(--sr-color-brand-soft), transparent)',
        borderBottom: '1px solid var(--sr-color-border-subtle)',
        display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ position: 'relative', width: 10, height: 10 }}>
            <span style={{
              position: 'absolute', inset: 0, borderRadius: '50%',
              background: 'var(--sr-color-success)',
            }} />
            <span style={{
              position: 'absolute', inset: -4, borderRadius: '50%',
              background: 'var(--sr-color-success)', opacity: 0.3,
              animation: 'srPulse 1.6s var(--sr-ease-out) infinite',
            }} />
          </div>
          <span style={{ fontWeight: 600, fontSize: 14 }}>Live call · 1m 24s</span>
        </div>
        <span style={{ fontFamily: 'var(--sr-font-mono)', fontSize: 12, color: 'var(--sr-color-text-subtle)' }}>
          (415) 555-0148
        </span>
      </div>

      <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <AgentAvatar size={48} listening />
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 600, fontSize: 14 }}>Eleanor · your agent</div>
            <div style={{ fontSize: 13, color: 'var(--sr-color-text-muted)' }}>Booking a service visit</div>
          </div>
          <Badge tone="brand" dot>Listening</Badge>
        </div>

        <Transcript />

        <div style={{
          display: 'flex', gap: 8, paddingTop: 4,
          borderTop: '1px solid var(--sr-color-border-subtle)',
          marginTop: 4, paddingTop: 16,
        }}>
          <Button variant="secondary" size="sm">Take over</Button>
          <Button variant="ghost" size="sm">Mute notes</Button>
          <div style={{ flex: 1 }} />
          <Button variant="ghost" size="sm">View full</Button>
        </div>
      </div>
    </div>
  );
}

function Transcript() {
  const lines = [
    { who: 'caller', text: 'Hi, my kitchen sink is backed up — water won\u2019t go down.' },
    { who: 'agent', text: 'Sorry to hear that. I can get someone out today. Is the leak active right now?' },
    { who: 'caller', text: 'No leak. Just slow drainage.' },
    { who: 'agent', text: 'Got it. We have a 2pm or 4pm slot today — which works better?' },
  ];
  return (
    <div style={{
      background: 'var(--sr-color-bg-sunken)',
      borderRadius: 'var(--sr-radius-md)',
      padding: 14,
      display: 'flex', flexDirection: 'column', gap: 10,
      maxHeight: 200, overflow: 'auto',
    }}>
      {lines.map((l, i) => (
        <div key={i} style={{ display: 'flex', gap: 10 }}>
          <span style={{
            fontFamily: 'var(--sr-font-mono)', fontSize: 11,
            color: l.who === 'agent' ? 'var(--sr-color-brand)' : 'var(--sr-color-text-subtle)',
            fontWeight: 600, width: 56, flexShrink: 0,
            textTransform: 'uppercase', letterSpacing: '.06em',
          }}>{l.who === 'agent' ? 'Agent' : 'Caller'}</span>
          <span style={{ fontSize: 13, color: 'var(--sr-color-text)', lineHeight: 1.5 }}>{l.text}</span>
        </div>
      ))}
    </div>
  );
}

// ── Agent Avatar ─────────────────────────────────────────────────────────
function AgentAvatar({ size = 56, listening = false }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: 'radial-gradient(circle at 30% 30%, var(--sr-color-brand-soft), var(--sr-color-brand))',
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0,
      boxShadow: listening ? '0 0 0 3px var(--sr-color-accent-soft)' : 'none',
      transition: 'box-shadow var(--sr-dur-base)',
    }}>
      <SoundGlyph size={size * 0.55} color="var(--sr-color-brand-fg)" animated={listening} />
    </div>
  );
}

// ── Call History Row ─────────────────────────────────────────────────────
function CallList() {
  const calls = [
    { name: 'Maria Cordero', issue: 'Drain backup · kitchen', time: '11:42 AM', tone: 'success', status: 'Booked · 2pm Today' },
    { name: 'Anonymous', issue: 'Quote · water heater', time: '10:18 AM', tone: 'brand', status: 'Quoted' },
    { name: 'Will Tran', issue: 'Emergency · burst pipe', time: '9:04 AM', tone: 'danger', status: 'Escalated to Pete' },
    { name: 'D. Patel', issue: 'Reschedule visit', time: 'Yesterday', tone: 'neutral', status: 'Moved to Fri' },
  ];
  return (
    <div style={{
      background: 'var(--sr-color-surface)',
      border: '1px solid var(--sr-color-border)',
      borderRadius: 'var(--sr-radius-lg)',
      overflow: 'hidden', width: '100%',
    }}>
      {calls.map((c, i) => (
        <div key={i} style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.4fr 1fr 100px',
          gap: 16, alignItems: 'center',
          padding: '16px 20px',
          borderTop: i === 0 ? 0 : '1px solid var(--sr-color-border-subtle)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{
              width: 36, height: 36, borderRadius: '50%',
              background: 'var(--sr-color-bg-sunken)',
              color: 'var(--sr-color-text-muted)',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 13, fontWeight: 600,
            }}>{c.name.split(' ').map(w => w[0]).slice(0, 2).join('')}</span>
            <span style={{ fontWeight: 600, fontSize: 14 }}>{c.name}</span>
          </div>
          <span style={{ fontSize: 14, color: 'var(--sr-color-text-muted)' }}>{c.issue}</span>
          <Badge tone={c.tone}>{c.status}</Badge>
          <span style={{ fontFamily: 'var(--sr-font-mono)', fontSize: 12, color: 'var(--sr-color-text-subtle)', textAlign: 'right' }}>
            {c.time}
          </span>
        </div>
      ))}
    </div>
  );
}

Object.assign(window, {
  Stepper, Progress, OnboardingStep, EmptyState,
  LiveCallCard, Transcript, AgentAvatar, CallList,
});

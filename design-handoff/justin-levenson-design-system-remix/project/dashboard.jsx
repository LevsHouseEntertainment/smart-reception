// Smart Reception — Operator Dashboard
// Composition: top bar, hero status strip, today's calls, live transcript drawer, schedule.

// ── Sample data ────────────────────────────────────────────────────────────
const CALLS = [
  {
    id: "c-204", time: "10:42 AM", duration: "3:14",
    caller: "Marisol Vega", phone: "(415) 555-0184",
    issue: "Kitchen sink backed up, water on the floor",
    status: "live", outcome: null, address: "1924 Folsom St, SF",
    avatarTone: "amber",
  },
  {
    id: "c-203", time: "10:11 AM", duration: "2:48",
    caller: "Dean Holloway", phone: "(510) 555-0142",
    issue: "Water heater leaking from base — pilot still on",
    status: "booked", outcome: "Booked Thu Nov 6 · 2:00 PM", address: "342 Alcatraz Ave, Oakland",
    avatarTone: "sage",
  },
  {
    id: "c-202", time: "9:47 AM", duration: "1:22",
    caller: "Karen Ng", phone: "(415) 555-0177",
    issue: "Garbage disposal humming, won't spin",
    status: "booked", outcome: "Booked Wed Nov 5 · 9:30 AM", address: "88 Geary Blvd, SF",
    avatarTone: "sage",
  },
  {
    id: "c-201", time: "9:20 AM", duration: "4:06",
    caller: "Robert Tessier", phone: "(650) 555-0118",
    issue: "Burst pipe in crawlspace — main water shut off",
    status: "escalated", outcome: "Flagged urgent — texted you 9:24",
    address: "47 Edgewood Rd, San Mateo",
    avatarTone: "slate",
  },
  {
    id: "c-200", time: "8:53 AM", duration: "2:11",
    caller: "Patel Residence", phone: "(415) 555-0163",
    issue: "Quote request — replacing two outdoor hose bibs",
    status: "quote", outcome: "Quote requested — emailed",
    address: "210 Lake St, SF",
    avatarTone: "neutral",
  },
  {
    id: "c-199", time: "8:30 AM", duration: "0:58",
    caller: "Unknown", phone: "(415) 555-0102",
    issue: "Solicitor — water filtration sales",
    status: "filtered", outcome: "Filtered — no callback",
    address: null, avatarTone: "neutral",
  },
];

const SCHEDULE = [
  { time: "11:30 AM", label: "On-site — Folsom St", note: "ETA 35 min", tone: "live" },
  { time: "1:15 PM",  label: "On-site — Alcatraz Ave", note: "Water heater swap", tone: "neutral" },
  { time: "3:00 PM",  label: "Window — Geary Blvd", note: "Disposal repair", tone: "neutral" },
  { time: "4:30 PM",  label: "Buffer", note: "Hold for overflow", tone: "muted" },
];

const TONE_BY_STATUS = {
  live: "live", booked: "booked", escalated: "escalated",
  quote: "info", filtered: "info",
};
const LABEL_BY_STATUS = {
  live: "On the line", booked: "Booked", escalated: "Escalated",
  quote: "Quote sent", filtered: "Filtered",
};

// ── Top bar ────────────────────────────────────────────────────────────────
function TopBar() {
  return (
    <header style={{
      display: "flex", alignItems: "center", gap: 24,
      padding: "16px 28px",
      borderBottom: "1px solid var(--sr-rule)",
      background: "var(--sr-canvas)",
      position: "sticky", top: 0, zIndex: 5,
    }}>
      <SRWordmark size="md" animated />
      <span className="sr-eyebrow" style={{ marginLeft: 4 }}>v0.1 · Operator</span>

      <nav style={{ display: "flex", gap: 4, marginLeft: 24 }}>
        {["Today", "All calls", "Schedule", "Customers", "Settings"].map((n, i) => (
          <button key={n} className="sr-btn sr-btn-ghost"
                  style={{ height: 32, fontWeight: i === 0 ? 700 : 500,
                           whiteSpace: "nowrap", flexShrink: 0,
                           color: i === 0 ? "var(--sr-ink)" : "var(--sr-ink-3)",
                           background: i === 0 ? "rgba(26,37,48,0.06)" : "transparent" }}>
            {n}
          </button>
        ))}
      </nav>

      <div style={{ flex: 1 }} />

      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <SRPill tone="live">
          <span className="dot" />Agent live
        </SRPill>
        <button className="sr-btn sr-btn-ghost" aria-label="Notifications">
          <SRIcon name="bell" />
        </button>
        <SRAvatar name="Justin L" tone="slate" size={32} />
      </div>
    </header>
  );
}

// ── Hero — situational summary ────────────────────────────────────────────
function HeroStrip({ density }) {
  return (
    <section style={{ padding: density === "compact" ? "20px 28px 16px" : "28px 28px 20px" }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 14 }}>
        <span className="sr-eyebrow">TUESDAY · NOV 4</span>
        <span className="sr-eyebrow" style={{ color: "var(--sr-ink-4)" }}>·</span>
        <span className="sr-eyebrow" style={{ color: "var(--sr-ink-4)" }}>BETWEEN JOBS · 11:04 AM</span>
      </div>

      <h1 className="sr-display" style={{
        fontSize: "clamp(34px, 4vw, 46px)",
        margin: "0 0 6px",
        maxWidth: "22ch",
      }}>
        Six calls caught.
        <span style={{ color: "var(--sr-ink-3)", fontWeight: 600 }}>
          {" "}Two on the books, one needs you.
        </span>
      </h1>
      <p className="sr-small" style={{ maxWidth: "60ch", margin: 0, color: "var(--sr-ink-2)" }}>
        Marisol Vega is on the line right now — kitchen sink backed up. The receptionist is gathering
        details. You'll get a text if she asks for you by name.
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
        gap: 0,
        marginTop: 22,
        border: "1px solid var(--sr-rule)",
        borderRadius: "var(--sr-r-lg)",
        background: "var(--sr-paper)",
        overflow: "hidden",
      }}>
        <Stat label="Caught today"    value="6" sub="6 inbound · 0 missed" />
        <Stat label="Booked"          value="2" sub="$840 estimated" tone="success" />
        <Stat label="Needs you"       value="1" sub="Robert T. · 9:24 AM" tone="danger" />
        <Stat label="Avg response"    value="11s" sub="Pickup to first word" />
      </div>
    </section>
  );
}

function Stat({ label, value, sub, tone }) {
  const valueColor = tone === "success" ? "var(--sr-color-success)"
                   : tone === "danger"  ? "var(--sr-color-danger)"
                   : "var(--sr-ink)";
  return (
    <div style={{
      padding: "18px 20px",
      borderRight: "1px solid var(--sr-rule)",
      display: "flex", flexDirection: "column", gap: 6,
    }}>
      <span className="sr-eyebrow">{label}</span>
      <span className="sr-display sr-num" style={{
        fontSize: 36, color: valueColor, lineHeight: 1,
      }}>{value}</span>
      <span className="sr-small" style={{ color: "var(--sr-ink-3)" }}>{sub}</span>
    </div>
  );
}

// ── Live call card (the one on the line right now) ───────────────────────
function LiveCallCard({ call, expanded, onToggle }) {
  const [seconds, setSeconds] = React.useState(194); // 3:14
  React.useEffect(() => {
    const id = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(id);
  }, []);
  const mm = Math.floor(seconds / 60);
  const ss = String(seconds % 60).padStart(2, "0");

  return (
    <div className="sr-paper" style={{
      padding: 22,
      borderColor: "rgba(58,107,74,0.4)",
      background: "linear-gradient(180deg, rgba(58,107,74,0.04), var(--sr-paper) 60%)",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* corner mark */}
      <div style={{
        position: "absolute", top: 0, left: 0, width: 4, bottom: 0,
        background: "var(--sr-color-success)",
      }} />

      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
        <SRPill tone="live"><span className="dot" />ON THE LINE</SRPill>
        <span className="sr-mono sr-num sr-small" style={{ color: "var(--sr-ink-2)" }}>
          {mm}:{ss}
        </span>
        <span className="sr-eyebrow" style={{ color: "var(--sr-ink-4)" }}>·</span>
        <span className="sr-eyebrow" style={{ color: "var(--sr-ink-3)" }}>
          STARTED 10:42 AM
        </span>
        <div style={{ flex: 1 }} />
        <button className="sr-btn">
          <SRIcon name="phone" /> Take the call
        </button>
        <button className="sr-btn sr-btn-primary">
          Listen in
        </button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 20, alignItems: "center" }}>
        <SRAvatar name={call.caller} tone={call.avatarTone} size={56} />
        <div style={{ minWidth: 0 }}>
          <h2 className="sr-h2" style={{ margin: 0 }}>{call.caller}</h2>
          <p className="sr-small" style={{ margin: "2px 0 0", color: "var(--sr-ink-2)" }}>
            <span className="sr-mono">{call.phone}</span>
            <span style={{ margin: "0 8px", color: "var(--sr-ink-4)" }}>·</span>
            New caller · No prior history
          </p>
        </div>
        <div style={{ minWidth: 220 }}>
          <SRWaveform height={48} bars={32} live />
        </div>
      </div>

      <div style={{ marginTop: 18, padding: "14px 16px",
                    background: "rgba(45,62,79,0.04)",
                    border: "1px solid var(--sr-rule)",
                    borderRadius: "var(--sr-r)" }}>
        <div className="sr-eyebrow" style={{ marginBottom: 6 }}>RECEPTIONIST IS HEARING</div>
        <p style={{ margin: 0, fontSize: 15, lineHeight: 1.5, color: "var(--sr-ink)" }}>
          "…it's coming up through the drain on both sides, and there's water on the floor under
          the cabinet. I put a towel down. We just had dinner so there's some food residue —"
        </p>
      </div>

      <div style={{ marginTop: 16, display: "flex", gap: 28, flexWrap: "wrap" }}>
        <Detail label="Issue" value={call.issue} />
        <Detail label="Address" value={call.address} mono />
        <Detail label="Captured so far"
                value={<>Name · Phone · Address · <span style={{ color: "var(--sr-ink-4)" }}>Severity</span> · <span style={{ color: "var(--sr-ink-4)" }}>Window</span></>} />
      </div>
    </div>
  );
}

function Detail({ label, value, mono }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 3, minWidth: 0 }}>
      <span className="sr-eyebrow">{label}</span>
      <span style={{
        fontSize: 13.5, color: "var(--sr-ink)",
        fontFamily: mono ? "var(--sr-mono)" : "var(--sr-text)",
        fontVariantNumeric: mono ? "tabular-nums" : "normal",
      }}>{value}</span>
    </div>
  );
}

// ── Call list ──────────────────────────────────────────────────────────────
function CallRow({ call, selected, onSelect }) {
  return (
    <button onClick={onSelect} style={{
      display: "grid",
      gridTemplateColumns: "84px 36px 1fr auto auto",
      gap: 16, alignItems: "center",
      width: "100%",
      padding: "14px 20px",
      border: 0,
      background: selected ? "rgba(196,154,42,0.08)" : "transparent",
      borderLeft: selected ? "3px solid var(--sr-color-accent)" : "3px solid transparent",
      borderBottom: "1px solid var(--sr-rule)",
      textAlign: "left",
      cursor: "pointer",
      fontFamily: "inherit",
      transition: "background .12s ease",
    }}
    onMouseEnter={(e) => { if (!selected) e.currentTarget.style.background = "rgba(26,37,48,0.03)"; }}
    onMouseLeave={(e) => { if (!selected) e.currentTarget.style.background = "transparent"; }}>
      <span className="sr-mono sr-small" style={{ color: "var(--sr-ink-3)" }}>{call.time}</span>
      <SRAvatar name={call.caller} tone={call.avatarTone} size={32} />
      <div style={{ minWidth: 0, overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 10, minWidth: 0 }}>
          <span style={{ fontWeight: 600, fontSize: 14, whiteSpace: "nowrap",
                         overflow: "hidden", textOverflow: "ellipsis", minWidth: 0 }}>
            {call.caller}
          </span>
          <span className="sr-mono sr-small" style={{ color: "var(--sr-ink-4)",
                whiteSpace: "nowrap", flexShrink: 0 }}>{call.phone}</span>
        </div>
        <div className="sr-small" style={{
          color: "var(--sr-ink-2)", marginTop: 2,
          whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
        }}>
          {call.issue}
        </div>
      </div>
      <div style={{ minWidth: 180, textAlign: "right" }}>
        <div style={{ marginBottom: 4 }}>
          <SRPill tone={TONE_BY_STATUS[call.status]}>
            {LABEL_BY_STATUS[call.status]}
          </SRPill>
        </div>
        {call.outcome && (
          <div className="sr-small" style={{ color: "var(--sr-ink-3)" }}>{call.outcome}</div>
        )}
      </div>
      <SRIcon name="chev-r" color="var(--sr-ink-4)" />
    </button>
  );
}

function CallList({ selected, onSelect }) {
  const past = CALLS.filter(c => c.status !== "live");
  return (
    <div className="sr-paper" style={{ overflow: "hidden" }}>
      <div style={{
        display: "flex", alignItems: "center", gap: 12,
        padding: "14px 20px",
        borderBottom: "1px solid var(--sr-rule)",
      }}>
        <h2 className="sr-h3" style={{ margin: 0 }}>Today's calls</h2>
        <span className="sr-eyebrow" style={{ color: "var(--sr-ink-4)" }}>
          {past.length} HANDLED
        </span>
        <div style={{ flex: 1 }} />
        <div style={{ position: "relative" }}>
          <SRIcon name="search" color="var(--sr-ink-4)" />
          <span style={{ position: "absolute" }} />
        </div>
        <button className="sr-btn sr-btn-ghost" style={{ height: 30, fontSize: 12.5 }}>
          <SRIcon name="filter" /> All outcomes
        </button>
      </div>

      <div>
        {past.map(c => (
          <CallRow key={c.id} call={c}
                   selected={selected === c.id}
                   onSelect={() => onSelect(c.id)} />
        ))}
      </div>

      <div style={{ padding: "12px 20px", display: "flex", gap: 12, alignItems: "center" }}>
        <span className="sr-small" style={{ color: "var(--sr-ink-3)" }}>
          Showing today · 6 calls
        </span>
        <div style={{ flex: 1 }} />
        <button className="sr-btn sr-btn-ghost" style={{ height: 30, fontSize: 12.5 }}>
          See yesterday <SRIcon name="chev-r" />
        </button>
      </div>
    </div>
  );
}

// ── Right rail — schedule + heads up ──────────────────────────────────────
function ScheduleCard() {
  return (
    <div className="sr-paper" style={{ padding: 20 }}>
      <SRSectionHeader index={1} label="Today's run"
        action={<button className="sr-btn sr-btn-ghost" style={{ height: 28, fontSize: 12 }}>
                  <SRIcon name="calendar" /> Calendar
                </button>} />
      <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 0 }}>
        {SCHEDULE.map((s, i) => (
          <div key={i} style={{
            display: "grid",
            gridTemplateColumns: "78px 1fr",
            gap: 12,
            padding: "12px 0",
            borderBottom: i < SCHEDULE.length - 1 ? "1px solid var(--sr-rule)" : "none",
          }}>
            <div>
              <div className="sr-mono sr-num" style={{ fontSize: 12.5, fontWeight: 600 }}>{s.time}</div>
              {s.tone === "live" && (
                <div className="sr-eyebrow" style={{ color: "var(--sr-color-success)", marginTop: 2 }}>
                  NEXT
                </div>
              )}
            </div>
            <div>
              <div style={{
                fontWeight: 600,
                color: s.tone === "muted" ? "var(--sr-ink-3)" : "var(--sr-ink)",
                fontStyle: s.tone === "muted" ? "italic" : "normal",
              }}>
                {s.label}
              </div>
              <div className="sr-small" style={{ color: "var(--sr-ink-3)" }}>{s.note}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeadsUpCard() {
  return (
    <div className="sr-paper" style={{
      padding: 20,
      borderColor: "rgba(196,154,42,0.4)",
      background: "linear-gradient(180deg, rgba(196,154,42,0.06), var(--sr-paper) 70%)",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
        <SRPill tone="warn"><span className="dot" />HEADS UP</SRPill>
      </div>
      <h3 className="sr-h3" style={{ margin: "0 0 6px" }}>
        Calendar isn't connected.
      </h3>
      <p className="sr-small" style={{ margin: "0 0 14px", color: "var(--sr-ink-2)" }}>
        The receptionist is offering windows from a default 8–6 weekday schedule. Connect Google
        or Apple Calendar so booked work shows up in your day.
      </p>
      <div style={{ display: "flex", gap: 8 }}>
        <button className="sr-btn sr-btn-primary">Connect calendar</button>
        <button className="sr-btn sr-btn-ghost">Not now</button>
      </div>
    </div>
  );
}

function VoiceCard({ voice }) {
  const VOICES = {
    warm:    { title: "Warm", desc: "Greets by name, uses contractions, asks how their day's going." },
    plain:   { title: "Plain", desc: "Direct and efficient. No small talk. Confirms and books." },
    crew:    { title: "Crew", desc: "Sounds like one of your dispatchers. Knows the lingo." },
  };
  const v = VOICES[voice] || VOICES.warm;
  return (
    <div className="sr-paper" style={{ padding: 20 }}>
      <SRSectionHeader index={2} label="Receptionist voice" />
      <div style={{ marginTop: 14 }}>
        <div className="sr-eyebrow" style={{ marginBottom: 4 }}>CURRENT</div>
        <div className="sr-h3" style={{ marginBottom: 4 }}>{v.title}</div>
        <p className="sr-small" style={{ margin: 0, color: "var(--sr-ink-2)" }}>{v.desc}</p>
      </div>
      <hr className="sr-rule" style={{ margin: "16px 0" }} />
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <button className="sr-btn" style={{ height: 32 }}>
          <SRIcon name="play" /> Hear sample
        </button>
        <span className="sr-small" style={{ color: "var(--sr-ink-3)" }}>0:34 sample</span>
      </div>
    </div>
  );
}

// ── Detail drawer (selected past call) ────────────────────────────────────
function CallDetail({ call, onClose }) {
  if (!call) return null;
  return (
    <aside className="sr-paper" style={{
      padding: 22,
      position: "sticky", top: 100,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
        <SRPill tone={TONE_BY_STATUS[call.status]}>
          {LABEL_BY_STATUS[call.status]}
        </SRPill>
        <div style={{ flex: 1 }} />
        <button className="sr-btn sr-btn-ghost" onClick={onClose}
                style={{ height: 28, padding: "0 8px", fontSize: 16 }}>✕</button>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <SRAvatar name={call.caller} tone={call.avatarTone} size={48} />
        <div>
          <div className="sr-h2" style={{ margin: 0 }}>{call.caller}</div>
          <div className="sr-mono sr-small" style={{ color: "var(--sr-ink-3)" }}>{call.phone}</div>
        </div>
      </div>

      <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 14 }}>
        <Detail label="Issue" value={call.issue} />
        {call.address && <Detail label="Address" value={call.address} mono />}
        <Detail label="Time / duration"
                value={<><span className="sr-mono">{call.time}</span> · {call.duration}</>} />
        {call.outcome && <Detail label="Outcome" value={call.outcome} />}
      </div>

      <hr className="sr-rule" style={{ margin: "18px 0" }} />

      <div className="sr-eyebrow" style={{ marginBottom: 10 }}>RECORDING</div>
      <div style={{
        padding: "12px 14px",
        background: "rgba(45,62,79,0.04)",
        border: "1px solid var(--sr-rule)",
        borderRadius: "var(--sr-r)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button className="sr-btn" style={{ height: 32, padding: "0 10px" }}>
            <SRIcon name="play" />
          </button>
          <div style={{ flex: 1 }}>
            <SRWaveform height={28} bars={36} live={false} color="var(--sr-ink-3)" />
          </div>
          <span className="sr-mono sr-num sr-small" style={{ color: "var(--sr-ink-3)" }}>
            {call.duration}
          </span>
        </div>
      </div>

      <div style={{ display: "flex", gap: 8, marginTop: 18 }}>
        <button className="sr-btn sr-btn-primary">Open in customer</button>
        <button className="sr-btn">
          <SRIcon name="phone" /> Call back
        </button>
      </div>
    </aside>
  );
}

Object.assign(window, {
  TopBar, HeroStrip, LiveCallCard, CallList, ScheduleCard, HeadsUpCard, VoiceCard, CallDetail,
  CALLS, SCHEDULE,
});

// Smart Reception — atomic UI components
// Wordmark, listening glyph, soundwave, pills, and small primitives.

// ── Asymmetric soundwave glyph ────────────────────────────────────────────
// "Bars are intentionally asymmetric — personality without showing off."
// The bars don't form a sine; they read like a real waveform caught mid-call.
function SRGlyph({ size = 28, animated = false, color = "currentColor" }) {
  // 9 bars, asymmetric heights (in % of viewBox)
  const heights = [22, 64, 38, 88, 52, 76, 30, 58, 18];
  const barW = 6;
  const gap = 4;
  const totalW = heights.length * barW + (heights.length - 1) * gap;
  const h = 36;

  return (
    <svg width={size * (totalW / h)} height={size} viewBox={`0 0 ${totalW} ${h}`}
         style={{ display: "block", overflow: "visible" }}>
      {heights.map((pct, i) => {
        const barH = (pct / 100) * h;
        const y = (h - barH) / 2;
        const x = i * (barW + gap);
        return (
          <rect key={i} x={x} y={y} width={barW} height={barH} rx="1"
                fill={color}>
            {animated && (
              <animate attributeName="height"
                       values={`${barH};${barH * 0.55};${barH * 1.15};${barH}`}
                       dur={`${1.4 + (i % 4) * 0.18}s`}
                       begin={`${i * 0.07}s`}
                       repeatCount="indefinite" />
            )}
            {animated && (
              <animate attributeName="y"
                       values={`${y};${y + barH * 0.225};${y - barH * 0.075};${y}`}
                       dur={`${1.4 + (i % 4) * 0.18}s`}
                       begin={`${i * 0.07}s`}
                       repeatCount="indefinite" />
            )}
          </rect>
        );
      })}
    </svg>
  );
}

// ── Wordmark — glyph + type lockup ────────────────────────────────────────
function SRWordmark({ size = "md", animated = false, color = "var(--sr-ink)" }) {
  const sizes = { sm: 14, md: 18, lg: 26, xl: 36 };
  const px = sizes[size] || sizes.md;
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: px * 0.5, color }}>
      <SRGlyph size={px * 0.95} animated={animated} color={color} />
      <span style={{
        fontFamily: "var(--sr-display)",
        fontWeight: 700,
        fontSize: px,
        letterSpacing: "-0.02em",
        lineHeight: 1,
      }}>
        Smart Reception
      </span>
    </div>
  );
}

// ── Live waveform — animates while a call is on the line ──────────────────
function SRWaveform({ height = 36, bars = 28, color = "var(--sr-color-accent)", live = true }) {
  const heights = React.useMemo(() => {
    // pseudo-random asymmetric, deterministic
    const seed = [22, 64, 38, 88, 52, 76, 30, 58, 18, 70, 44, 26, 82, 36, 58, 22, 92, 48, 32, 64, 18, 78, 40, 56, 24, 70, 44, 90];
    return Array.from({ length: bars }, (_, i) => seed[i % seed.length]);
  }, [bars]);
  const barW = 3;
  const gap = 3;
  const totalW = bars * barW + (bars - 1) * gap;

  return (
    <svg width="100%" height={height} viewBox={`0 0 ${totalW} ${height}`}
         preserveAspectRatio="none" style={{ display: "block" }}>
      {heights.map((pct, i) => {
        const barH = (pct / 100) * height;
        const y = (height - barH) / 2;
        const x = i * (barW + gap);
        return (
          <rect key={i} x={x} y={y} width={barW} height={barH} rx="1.5" fill={color}
                opacity={live ? 0.95 : 0.35}>
            {live && (
              <>
                <animate attributeName="height"
                         values={`${barH};${barH * 0.4};${barH * 1.2};${barH * 0.7};${barH}`}
                         dur={`${0.9 + (i % 5) * 0.13}s`}
                         begin={`${i * 0.04}s`}
                         repeatCount="indefinite" />
                <animate attributeName="y"
                         values={`${y};${y + barH * 0.3};${y - barH * 0.1};${y + barH * 0.15};${y}`}
                         dur={`${0.9 + (i % 5) * 0.13}s`}
                         begin={`${i * 0.04}s`}
                         repeatCount="indefinite" />
              </>
            )}
          </rect>
        );
      })}
    </svg>
  );
}

// ── Pill ──────────────────────────────────────────────────────────────────
function SRPill({ tone, dot = true, children }) {
  return (
    <span className="sr-pill" data-tone={tone}>
      {dot && <span className="dot" />}
      {children}
    </span>
  );
}

// ── Avatar (caller) ───────────────────────────────────────────────────────
function SRAvatar({ name, tone = "neutral", size = 36 }) {
  const initials = name.split(" ").map(s => s[0]).slice(0, 2).join("").toUpperCase();
  const tones = {
    neutral: { bg: "var(--sr-canvas-2)", fg: "var(--sr-ink-2)" },
    slate:   { bg: "rgba(45,62,79,0.12)", fg: "var(--sr-color-brand)" },
    amber:   { bg: "rgba(196,154,42,0.16)", fg: "#8A6A14" },
    sage:    { bg: "rgba(58,107,74,0.14)", fg: "var(--sr-color-success)" },
  };
  const t = tones[tone] || tones.neutral;
  return (
    <div style={{
      width: size, height: size, flexShrink: 0,
      borderRadius: "50%", background: t.bg, color: t.fg,
      display: "grid", placeItems: "center",
      fontFamily: "var(--sr-display)", fontWeight: 700,
      fontSize: size * 0.36, letterSpacing: "-0.01em",
    }}>
      {initials}
    </div>
  );
}

// ── Hairline section header ───────────────────────────────────────────────
function SRSectionHeader({ index, label, action }) {
  return (
    <div style={{
      display: "flex", alignItems: "baseline",
      gap: 16, padding: "0 0 10px",
      borderBottom: "1px solid var(--sr-rule)",
    }}>
      {index != null && (
        <span className="sr-eyebrow" style={{ minWidth: 28 }}>
          {String(index).padStart(2, "0")}
        </span>
      )}
      <h2 className="sr-h3" style={{ margin: 0, flex: 1 }}>{label}</h2>
      {action}
    </div>
  );
}

// ── Tiny inline icon set (stroke-based, neutral) ──────────────────────────
function SRIcon({ name, size = 16, color = "currentColor" }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none",
                   stroke: color, strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "phone-in":
      return <svg {...common}><path d="M5 4h3l1.5 4-2 1.5a12 12 0 0 0 6 6L15 13.5 19 15v3a2 2 0 0 1-2.2 2A16 16 0 0 1 3 6.2 2 2 0 0 1 5 4z"/><path d="M15 4l4 4M19 4l-4 4"/></svg>;
    case "phone":
      return <svg {...common}><path d="M5 4h3l1.5 4-2 1.5a12 12 0 0 0 6 6L15 13.5 19 15v3a2 2 0 0 1-2.2 2A16 16 0 0 1 3 6.2 2 2 0 0 1 5 4z"/></svg>;
    case "calendar":
      return <svg {...common}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>;
    case "search":
      return <svg {...common}><circle cx="11" cy="11" r="6"/><path d="m20 20-4-4"/></svg>;
    case "filter":
      return <svg {...common}><path d="M4 5h16M7 12h10M10 19h4"/></svg>;
    case "chev-r":
      return <svg {...common}><path d="m9 6 6 6-6 6"/></svg>;
    case "chev-d":
      return <svg {...common}><path d="m6 9 6 6 6-6"/></svg>;
    case "settings":
      return <svg {...common}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>;
    case "bell":
      return <svg {...common}><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10 21a2 2 0 0 0 4 0"/></svg>;
    case "check":
      return <svg {...common}><path d="m4 12 5 5L20 6"/></svg>;
    case "alert":
      return <svg {...common}><path d="M12 3 2 21h20L12 3z"/><path d="M12 9v5M12 17h.01"/></svg>;
    case "user":
      return <svg {...common}><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>;
    case "wrench":
      return <svg {...common}><path d="M14.7 6.3a4 4 0 1 1-1.4 5.4L4 21l-1.5-1.5L11.3 11a4 4 0 0 1 3.4-4.7z"/></svg>;
    case "play":
      return <svg {...common}><path d="M7 4v16l13-8z" fill={color}/></svg>;
    case "pause":
      return <svg {...common}><rect x="6" y="4" width="4" height="16" fill={color}/><rect x="14" y="4" width="4" height="16" fill={color}/></svg>;
    case "dot":
      return <svg {...common}><circle cx="12" cy="12" r="3" fill={color}/></svg>;
    case "arrow-up-r":
      return <svg {...common}><path d="M7 17 17 7M9 7h8v8"/></svg>;
    default:
      return null;
  }
}

Object.assign(window, {
  SRGlyph, SRWordmark, SRWaveform, SRPill, SRAvatar, SRSectionHeader, SRIcon,
});

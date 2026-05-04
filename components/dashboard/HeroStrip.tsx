type StatProps = {
  label: string;
  value: string;
  sub: string;
  tone?: "success" | "danger";
};

function Stat({ label, value, sub, tone }: StatProps) {
  const valueColor =
    tone === "success" ? "var(--sr-color-success)" :
    tone === "danger"  ? "var(--sr-color-danger)"  :
    "var(--sr-ink)";
  return (
    <div
      className="sr-stat"
      style={{
        padding: "18px 20px",
        borderRight: "1px solid var(--sr-rule)",
        display: "flex",
        flexDirection: "column",
        gap: 6,
      }}
    >
      <span className="sr-eyebrow">{label}</span>
      <span
        className="sr-display sr-num"
        style={{ fontSize: 36, color: valueColor, lineHeight: 1 }}
      >
        {value}
      </span>
      <span className="sr-small" style={{ color: "var(--sr-ink-3)" }}>
        {sub}
      </span>
    </div>
  );
}

type Props = {
  date?: string;
  status?: string;
  headline: React.ReactNode;
  lede: React.ReactNode;
  stats: StatProps[];
  density?: "compact" | "regular" | "comfy";
};

export function HeroStrip({
  date = "TUESDAY · NOV 4",
  status = "BETWEEN JOBS · 11:04 AM",
  headline,
  lede,
  stats,
  density = "regular",
}: Props) {
  return (
    <section
      style={{
        padding: density === "compact" ? "20px 28px 16px" : "28px 28px 20px",
      }}
      className="sr-hero-strip"
    >
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 16,
          marginBottom: 14,
          flexWrap: "wrap",
        }}
      >
        <span className="sr-eyebrow">{date}</span>
        <span className="sr-eyebrow" style={{ color: "var(--sr-ink-4)" }}>·</span>
        <span className="sr-eyebrow" style={{ color: "var(--sr-ink-4)" }}>{status}</span>
      </div>

      <h1
        className="sr-display"
        style={{
          fontSize: "clamp(28px, 4vw, 46px)",
          margin: "0 0 6px",
          maxWidth: "22ch",
        }}
      >
        {headline}
      </h1>
      <p className="sr-small" style={{ maxWidth: "60ch", margin: 0, color: "var(--sr-ink-2)" }}>
        {lede}
      </p>

      <div
        className="sr-stat-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          gap: 0,
          marginTop: 22,
          border: "1px solid var(--sr-rule)",
          borderRadius: "var(--sr-r-lg)",
          background: "var(--sr-paper)",
          overflow: "hidden",
        }}
      >
        {stats.map((s, i) => (
          <Stat key={i} {...s} />
        ))}
      </div>
    </section>
  );
}

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  action?: React.ReactNode;
};

export function PageHeader({ eyebrow, title, lede, action }: Props) {
  return (
    <section
      className="sr-page-header"
      style={{ padding: "28px 28px 20px" }}
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
        <span className="sr-eyebrow">{eyebrow}</span>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          gap: 24,
          flexWrap: "wrap",
        }}
      >
        <h1
          className="sr-display"
          style={{
            fontSize: "clamp(28px, 4vw, 46px)",
            margin: 0,
            maxWidth: "22ch",
            flex: 1,
          }}
        >
          {title}
        </h1>
        {action}
      </div>
      {lede && (
        <p
          className="sr-small"
          style={{ maxWidth: "60ch", margin: "10px 0 0", color: "var(--sr-ink-2)" }}
        >
          {lede}
        </p>
      )}
    </section>
  );
}

import { SRPill } from "@/components/ui/SRPill";

export function HeadsUpCard() {
  return (
    <div
      className="sr-paper"
      style={{
        padding: 20,
        borderColor: "rgba(196,154,42,0.4)",
        background:
          "linear-gradient(180deg, rgba(196,154,42,0.06), var(--sr-paper) 70%)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
        <SRPill tone="warn" dot>HEADS UP</SRPill>
      </div>
      <h3 className="sr-h3" style={{ margin: "0 0 6px" }}>
        Calendar isn&rsquo;t connected.
      </h3>
      <p className="sr-small" style={{ margin: "0 0 14px", color: "var(--sr-ink-2)" }}>
        The receptionist is offering windows from a default 8–6 weekday schedule. Connect Google
        or Apple Calendar so booked work shows up in your day.
      </p>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <button className="sr-btn sr-btn-primary">Connect calendar</button>
        <button className="sr-btn sr-btn-ghost">Not now</button>
      </div>
    </div>
  );
}

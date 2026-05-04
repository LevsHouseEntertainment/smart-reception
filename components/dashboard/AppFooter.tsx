import { SRGlyph } from "@/components/ui/SRGlyph";

export function AppFooter() {
  return (
    <footer
      style={{
        padding: "20px 28px 40px",
        display: "flex",
        gap: 16,
        alignItems: "center",
        color: "var(--sr-ink-3)",
        flexWrap: "wrap",
      }}
    >
      <span className="sr-eyebrow">SMART RECEPTION · v0.1</span>
      <span className="sr-eyebrow" style={{ color: "var(--sr-ink-4)" }}>·</span>
      <span className="sr-small">Built for service operators on a phone or laptop, often between jobs.</span>
      <div style={{ flex: 1 }} />
      <SRGlyph size={18} animated color="var(--sr-ink-3)" />
    </footer>
  );
}

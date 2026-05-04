import type { ScheduleItem } from "@/lib/types";
import { SRSectionHeader } from "@/components/ui/SRSectionHeader";
import { SRIcon } from "@/components/ui/SRIcon";

type Props = {
  items: ScheduleItem[];
  index?: number;
  label?: string;
};

export function ScheduleCard({ items, index = 1, label = "Today's run" }: Props) {
  return (
    <div className="sr-paper" style={{ padding: 20 }}>
      <SRSectionHeader
        index={index}
        label={label}
        action={
          <button className="sr-btn sr-btn-ghost" style={{ height: 28, fontSize: 12 }}>
            <SRIcon name="calendar" /> Calendar
          </button>
        }
      />
      <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 0 }}>
        {items.map((s, i) => (
          <div
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "78px 1fr",
              gap: 12,
              padding: "12px 0",
              borderBottom: i < items.length - 1 ? "1px solid var(--sr-rule)" : "none",
            }}
          >
            <div>
              <div className="sr-mono sr-num" style={{ fontSize: 12.5, fontWeight: 600 }}>
                {s.time}
              </div>
              {s.tone === "live" && (
                <div
                  className="sr-eyebrow"
                  style={{ color: "var(--sr-color-success)", marginTop: 2 }}
                >
                  NEXT
                </div>
              )}
            </div>
            <div>
              <div
                style={{
                  fontWeight: 600,
                  color: s.tone === "muted" ? "var(--sr-ink-3)" : "var(--sr-ink)",
                  fontStyle: s.tone === "muted" ? "italic" : "normal",
                }}
              >
                {s.label}
              </div>
              <div className="sr-small" style={{ color: "var(--sr-ink-3)" }}>
                {s.note}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

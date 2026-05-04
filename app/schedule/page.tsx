import { SCHEDULE, SCHEDULE_TOMORROW } from "@/lib/data";
import { PageHeader } from "@/components/dashboard/PageHeader";
import { ScheduleCard } from "@/components/dashboard/ScheduleCard";
import { HeadsUpCard } from "@/components/dashboard/HeadsUpCard";
import { SRIcon } from "@/components/ui/SRIcon";

export default function SchedulePage() {
  return (
    <>
      <PageHeader
        eyebrow="SCHEDULE · NOV 4–5"
        title={
          <>
            Today and tomorrow.
            <span style={{ color: "var(--sr-ink-3)", fontWeight: 600 }}>
              {" "}{SCHEDULE.length + SCHEDULE_TOMORROW.length} jobs on the books.
            </span>
          </>
        }
        lede="What the receptionist booked for you, plus your own buffers and travel windows. Connect a calendar to push these to your phone."
        action={
          <button className="sr-btn">
            <SRIcon name="calendar" /> Connect calendar
          </button>
        }
      />

      <div className="sr-grid">
        <main style={{ display: "flex", flexDirection: "column", gap: 24, minWidth: 0 }}>
          <ScheduleCard items={SCHEDULE} index={1} label="Tuesday · Today" />
          <ScheduleCard items={SCHEDULE_TOMORROW} index={2} label="Wednesday · Tomorrow" />
        </main>

        <aside style={{ display: "flex", flexDirection: "column", gap: 24, minWidth: 0 }}>
          <HeadsUpCard />
          <div className="sr-paper" style={{ padding: 20 }}>
            <div className="sr-eyebrow" style={{ marginBottom: 8 }}>BOOKING WINDOWS</div>
            <p className="sr-small" style={{ margin: "0 0 14px", color: "var(--sr-ink-2)" }}>
              The receptionist offers callers these windows by default.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <Row label="Mon–Fri" value="8:00 AM – 6:00 PM" />
              <Row label="Saturday" value="9:00 AM – 1:00 PM" />
              <Row label="Sunday" value="Closed" />
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "8px 0",
        borderBottom: "1px solid var(--sr-rule)",
        fontSize: 13,
      }}
    >
      <span style={{ color: "var(--sr-ink-2)" }}>{label}</span>
      <span className="sr-mono" style={{ color: "var(--sr-ink)" }}>{value}</span>
    </div>
  );
}

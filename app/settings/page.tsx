import Link from "next/link";
import { PageHeader } from "@/components/dashboard/PageHeader";
import { SRPill } from "@/components/ui/SRPill";
import { SRIcon } from "@/components/ui/SRIcon";

type Row = {
  href: string;
  title: string;
  description: string;
  status: { tone: "live" | "warn" | "info"; label: string };
};

const ROWS: Row[] = [
  {
    href: "/settings/voice",
    title: "Receptionist voice",
    description:
      "Pick a default voice or clone your own with ElevenLabs. The receptionist will sound like whoever you choose on every call.",
    status: { tone: "info", label: "Default · Warm" },
  },
  {
    href: "#",
    title: "Phone number",
    description:
      "Forward your business line to the Smart Reception number. Or, give us a brand-new Twilio number to ring.",
    status: { tone: "warn", label: "Not connected" },
  },
  {
    href: "#",
    title: "Calendar",
    description:
      "Connect Google or Apple Calendar so booked work shows up in your day automatically.",
    status: { tone: "warn", label: "Not connected" },
  },
  {
    href: "#",
    title: "Notifications",
    description:
      "Where to text you when a call escalates or a caller asks for you by name.",
    status: { tone: "live", label: "Texting (415) ***-2218" },
  },
  {
    href: "#",
    title: "Booking windows",
    description: "Days and hours the receptionist offers to callers.",
    status: { tone: "info", label: "Mon–Fri 8–6 · Sat 9–1" },
  },
  {
    href: "#",
    title: "Billing",
    description: "Plan, included minutes, and ElevenLabs / Twilio passthrough.",
    status: { tone: "info", label: "Trial · 14 days left" },
  },
];

export default function SettingsPage() {
  return (
    <>
      <PageHeader
        eyebrow="SETTINGS"
        title={
          <>
            Make the receptionist
            <span style={{ color: "var(--sr-ink-3)", fontWeight: 600 }}> sound like you.</span>
          </>
        }
        lede="Voice, phone number, calendar, and how you get reached when things matter."
      />

      <div style={{ padding: "0 28px 60px" }} className="sr-customers-pad">
        <div className="sr-paper" style={{ overflow: "hidden" }}>
          {ROWS.map((r, i) => (
            <Link
              key={r.title}
              href={r.href}
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0, 1fr) auto auto",
                gap: 20,
                alignItems: "center",
                padding: "18px 20px",
                borderBottom: i < ROWS.length - 1 ? "1px solid var(--sr-rule)" : "none",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <div style={{ minWidth: 0 }}>
                <div className="sr-h3" style={{ marginBottom: 4 }}>{r.title}</div>
                <div className="sr-small" style={{ color: "var(--sr-ink-2)" }}>
                  {r.description}
                </div>
              </div>
              <SRPill tone={r.status.tone} dot>{r.status.label}</SRPill>
              <SRIcon name="chev-r" color="var(--sr-ink-4)" />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

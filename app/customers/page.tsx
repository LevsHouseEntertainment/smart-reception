import Link from "next/link";
import { CUSTOMERS } from "@/lib/data";
import { PageHeader } from "@/components/dashboard/PageHeader";
import { SRAvatar } from "@/components/ui/SRAvatar";
import { SRIcon } from "@/components/ui/SRIcon";

export default function CustomersPage() {
  return (
    <>
      <PageHeader
        eyebrow="CUSTOMERS"
        title={
          <>
            {CUSTOMERS.length} people the receptionist has met.
          </>
        }
        lede="Anyone who's called more than once shows up here. Repeat callers see continuity — the receptionist remembers their address and what was wrong last time."
        action={
          <button className="sr-btn">
            <SRIcon name="search" /> Find a customer
          </button>
        }
      />

      <div style={{ padding: "0 28px 60px" }} className="sr-customers-pad">
        <div className="sr-paper" style={{ overflow: "hidden" }}>
          {CUSTOMERS.map((c, i) => (
            <Link
              key={c.id}
              href="#"
              style={{
                display: "grid",
                gridTemplateColumns: "48px minmax(0, 1.4fr) minmax(0, 1fr) auto auto",
                gap: 16,
                alignItems: "center",
                padding: "14px 20px",
                borderBottom: i < CUSTOMERS.length - 1 ? "1px solid var(--sr-rule)" : "none",
                color: "inherit",
                textDecoration: "none",
              }}
              className="sr-customer-row"
            >
              <SRAvatar name={c.name} tone={c.avatarTone} size={40} />
              <div style={{ minWidth: 0 }}>
                <div style={{ fontWeight: 600, fontSize: 14 }}>{c.name}</div>
                <div className="sr-mono sr-small" style={{ color: "var(--sr-ink-3)" }}>
                  {c.phone}
                </div>
              </div>
              <div style={{ minWidth: 0 }} className="sr-customer-meta">
                <div className="sr-small" style={{ color: "var(--sr-ink-2)" }}>
                  {c.address ?? "—"}
                </div>
                <div className="sr-small" style={{ color: "var(--sr-ink-3)", marginTop: 2 }}>
                  Last: {c.lastIssue}
                </div>
              </div>
              <div style={{ textAlign: "right" }} className="sr-customer-count">
                <div className="sr-display sr-num" style={{ fontSize: 22, lineHeight: 1 }}>
                  {c.callCount}
                </div>
                <div className="sr-eyebrow" style={{ marginTop: 4 }}>CALLS</div>
              </div>
              <SRIcon name="chev-r" color="var(--sr-ink-4)" />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

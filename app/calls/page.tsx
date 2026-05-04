"use client";

import { useState } from "react";
import { ALL_CALLS } from "@/lib/data";
import { PageHeader } from "@/components/dashboard/PageHeader";
import { CallList } from "@/components/dashboard/CallList";
import { CallDetail } from "@/components/dashboard/CallDetail";
import { SRIcon } from "@/components/ui/SRIcon";

export default function CallsPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const calls = ALL_CALLS.filter((c) => c.status !== "live");
  const selectedCall = calls.find((c) => c.id === selected) ?? null;

  return (
    <>
      <PageHeader
        eyebrow="ALL CALLS · LAST 7 DAYS"
        title={
          <>
            {calls.length} calls.
            <span style={{ color: "var(--sr-ink-3)", fontWeight: 600 }}>
              {" "}{calls.filter((c) => c.status === "booked").length} booked, {calls.filter((c) => c.status === "escalated").length} escalated.
            </span>
          </>
        }
        lede="Every inbound call the receptionist handled, with outcome and recording. Click a row to see the transcript."
      />

      <div className="sr-grid">
        <main style={{ display: "flex", flexDirection: "column", gap: 24, minWidth: 0 }}>
          <CallList
            calls={calls}
            selectedId={selected}
            onSelect={setSelected}
            title="All calls"
            countLabel={`${calls.length} TOTAL`}
            footerLabel={`Showing last 7 days · ${calls.length} calls`}
            footerAction={
              <button className="sr-btn sr-btn-ghost" style={{ height: 30, fontSize: 12.5 }}>
                Export CSV <SRIcon name="arrow-up-r" />
              </button>
            }
            showDate
          />
        </main>

        <aside style={{ display: "flex", flexDirection: "column", gap: 24, minWidth: 0 }}>
          {selectedCall ? (
            <CallDetail call={selectedCall} onClose={() => setSelected(null)} />
          ) : (
            <div
              className="sr-paper"
              style={{ padding: 22, color: "var(--sr-ink-3)", fontSize: 13.5 }}
            >
              <div className="sr-eyebrow" style={{ marginBottom: 8 }}>NO CALL SELECTED</div>
              <p style={{ margin: 0 }}>
                Pick a call from the list to see who phoned, what the receptionist heard, and how it
                ended.
              </p>
            </div>
          )}
        </aside>
      </div>
    </>
  );
}

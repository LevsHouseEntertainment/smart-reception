"use client";

import { useState } from "react";
import { CALLS, SCHEDULE } from "@/lib/data";
import { HeroStrip } from "@/components/dashboard/HeroStrip";
import { LiveCallCard } from "@/components/dashboard/LiveCallCard";
import { CallList } from "@/components/dashboard/CallList";
import { CallDetail } from "@/components/dashboard/CallDetail";
import { HeadsUpCard } from "@/components/dashboard/HeadsUpCard";
import { ScheduleCard } from "@/components/dashboard/ScheduleCard";
import { VoiceCard } from "@/components/dashboard/VoiceCard";
import { SRIcon } from "@/components/ui/SRIcon";

export default function TodayPage() {
  const [selected, setSelected] = useState<string | null>("c-203");
  const liveCall = CALLS.find((c) => c.status === "live");
  const past = CALLS.filter((c) => c.status !== "live");
  const selectedCall = past.find((c) => c.id === selected) ?? null;

  return (
    <>
      <HeroStrip
        headline={
          <>
            Six calls caught.
            <span style={{ color: "var(--sr-ink-3)", fontWeight: 600 }}>
              {" "}Two on the books, one needs you.
            </span>
          </>
        }
        lede={
          <>
            Marisol Vega is on the line right now — kitchen sink backed up. The receptionist is
            gathering details. You&rsquo;ll get a text if she asks for you by name.
          </>
        }
        stats={[
          { label: "Caught today", value: "6", sub: "6 inbound · 0 missed" },
          { label: "Booked", value: "2", sub: "$840 estimated", tone: "success" },
          { label: "Needs you", value: "1", sub: "Robert T. · 9:24 AM", tone: "danger" },
          { label: "Avg response", value: "11s", sub: "Pickup to first word" },
        ]}
      />

      <div className="sr-grid">
        <main style={{ display: "flex", flexDirection: "column", gap: 24, minWidth: 0 }}>
          {liveCall && <LiveCallCard call={liveCall} />}
          <CallList
            calls={past}
            selectedId={selected}
            onSelect={setSelected}
            footerLabel={`Showing today · ${past.length} calls`}
            footerAction={
              <button className="sr-btn sr-btn-ghost" style={{ height: 30, fontSize: 12.5 }}>
                See yesterday <SRIcon name="chev-r" />
              </button>
            }
          />
        </main>

        <aside style={{ display: "flex", flexDirection: "column", gap: 24, minWidth: 0 }}>
          {selectedCall ? (
            <CallDetail call={selectedCall} onClose={() => setSelected(null)} />
          ) : (
            <>
              <HeadsUpCard />
              <ScheduleCard items={SCHEDULE} />
              <VoiceCard voice="warm" />
            </>
          )}
        </aside>
      </div>
    </>
  );
}

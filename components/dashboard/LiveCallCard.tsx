"use client";

import { useEffect, useState } from "react";
import type { Call } from "@/lib/types";
import { SRPill } from "@/components/ui/SRPill";
import { SRAvatar } from "@/components/ui/SRAvatar";
import { SRWaveform } from "@/components/ui/SRWaveform";
import { SRIcon } from "@/components/ui/SRIcon";

type Props = { call: Call };

type DetailProps = {
  label: string;
  value: React.ReactNode;
  mono?: boolean;
};

function Detail({ label, value, mono }: DetailProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 3, minWidth: 0 }}>
      <span className="sr-eyebrow">{label}</span>
      <span
        style={{
          fontSize: 13.5,
          color: "var(--sr-ink)",
          fontFamily: mono ? "var(--sr-mono)" : "var(--sr-text)",
          fontVariantNumeric: mono ? "tabular-nums" : "normal",
        }}
      >
        {value}
      </span>
    </div>
  );
}

export function LiveCallCard({ call }: Props) {
  const [seconds, setSeconds] = useState(194); // 3:14
  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, []);
  const mm = Math.floor(seconds / 60);
  const ss = String(seconds % 60).padStart(2, "0");

  return (
    <div
      className="sr-paper sr-live-card"
      style={{
        padding: 22,
        borderColor: "rgba(58,107,74,0.4)",
        background:
          "linear-gradient(180deg, rgba(58,107,74,0.04), var(--sr-paper) 60%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 4,
          bottom: 0,
          background: "var(--sr-color-success)",
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          marginBottom: 16,
          flexWrap: "wrap",
        }}
      >
        <SRPill tone="live" dot>ON THE LINE</SRPill>
        <span className="sr-mono sr-num sr-small" style={{ color: "var(--sr-ink-2)" }}>
          {mm}:{ss}
        </span>
        <span className="sr-eyebrow" style={{ color: "var(--sr-ink-4)" }}>·</span>
        <span className="sr-eyebrow" style={{ color: "var(--sr-ink-3)" }}>
          STARTED {call.time}
        </span>
        <div style={{ flex: 1 }} />
        <button className="sr-btn">
          <SRIcon name="phone" /> Take the call
        </button>
        <button className="sr-btn sr-btn-primary">Listen in</button>
      </div>

      <div
        className="sr-live-head"
        style={{
          display: "grid",
          gridTemplateColumns: "auto 1fr auto",
          gap: 20,
          alignItems: "center",
        }}
      >
        <SRAvatar name={call.caller} tone={call.avatarTone} size={56} />
        <div style={{ minWidth: 0 }}>
          <h2 className="sr-h2" style={{ margin: 0 }}>{call.caller}</h2>
          <p
            className="sr-small"
            style={{ margin: "2px 0 0", color: "var(--sr-ink-2)" }}
          >
            <span className="sr-mono">{call.phone}</span>
            <span style={{ margin: "0 8px", color: "var(--sr-ink-4)" }}>·</span>
            New caller · No prior history
          </p>
        </div>
        <div style={{ minWidth: 220 }} className="sr-live-wave">
          <SRWaveform height={48} bars={32} live />
        </div>
      </div>

      <div
        style={{
          marginTop: 18,
          padding: "14px 16px",
          background: "rgba(45,62,79,0.04)",
          border: "1px solid var(--sr-rule)",
          borderRadius: "var(--sr-r)",
        }}
      >
        <div className="sr-eyebrow" style={{ marginBottom: 6 }}>RECEPTIONIST IS HEARING</div>
        <p style={{ margin: 0, fontSize: 15, lineHeight: 1.5, color: "var(--sr-ink)" }}>
          &ldquo;…it&rsquo;s coming up through the drain on both sides, and there&rsquo;s water on the floor under
          the cabinet. I put a towel down. We just had dinner so there&rsquo;s some food residue —&rdquo;
        </p>
      </div>

      <div style={{ marginTop: 16, display: "flex", gap: 28, flexWrap: "wrap" }}>
        <Detail label="Issue" value={call.issue} />
        {call.address && <Detail label="Address" value={call.address} mono />}
        <Detail
          label="Captured so far"
          value={
            <>
              Name · Phone · Address ·{" "}
              <span style={{ color: "var(--sr-ink-4)" }}>Severity</span> ·{" "}
              <span style={{ color: "var(--sr-ink-4)" }}>Window</span>
            </>
          }
        />
      </div>
    </div>
  );
}

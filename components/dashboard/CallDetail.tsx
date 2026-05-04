"use client";

import type { Call } from "@/lib/types";
import { TONE_BY_STATUS, LABEL_BY_STATUS } from "@/lib/data";
import { SRPill } from "@/components/ui/SRPill";
import { SRAvatar } from "@/components/ui/SRAvatar";
import { SRWaveform } from "@/components/ui/SRWaveform";
import { SRIcon } from "@/components/ui/SRIcon";

type Props = {
  call: Call;
  onClose: () => void;
};

function Detail({
  label,
  value,
  mono,
}: {
  label: string;
  value: React.ReactNode;
  mono?: boolean;
}) {
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

export function CallDetail({ call, onClose }: Props) {
  return (
    <aside className="sr-paper" style={{ padding: 22, position: "sticky", top: 100 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
        <SRPill tone={TONE_BY_STATUS[call.status]} dot>
          {LABEL_BY_STATUS[call.status]}
        </SRPill>
        <div style={{ flex: 1 }} />
        <button
          className="sr-btn sr-btn-ghost"
          onClick={onClose}
          aria-label="Close detail"
          style={{ height: 28, padding: "0 8px", fontSize: 16 }}
        >
          ✕
        </button>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <SRAvatar name={call.caller} tone={call.avatarTone} size={48} />
        <div>
          <div className="sr-h2" style={{ margin: 0 }}>{call.caller}</div>
          <div className="sr-mono sr-small" style={{ color: "var(--sr-ink-3)" }}>
            {call.phone}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 14 }}>
        <Detail label="Issue" value={call.issue} />
        {call.address && <Detail label="Address" value={call.address} mono />}
        <Detail
          label="Time / duration"
          value={
            <>
              <span className="sr-mono">{call.time}</span> · {call.duration}
            </>
          }
        />
        {call.outcome && <Detail label="Outcome" value={call.outcome} />}
      </div>

      <hr className="sr-rule" style={{ margin: "18px 0" }} />

      <div className="sr-eyebrow" style={{ marginBottom: 10 }}>RECORDING</div>
      <div
        style={{
          padding: "12px 14px",
          background: "rgba(45,62,79,0.04)",
          border: "1px solid var(--sr-rule)",
          borderRadius: "var(--sr-r)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button className="sr-btn" style={{ height: 32, padding: "0 10px" }} aria-label="Play recording">
            <SRIcon name="play" />
          </button>
          <div style={{ flex: 1 }}>
            <SRWaveform height={28} bars={36} live={false} color="var(--sr-ink-3)" />
          </div>
          <span className="sr-mono sr-num sr-small" style={{ color: "var(--sr-ink-3)" }}>
            {call.duration}
          </span>
        </div>
      </div>

      <div style={{ display: "flex", gap: 8, marginTop: 18, flexWrap: "wrap" }}>
        <button className="sr-btn sr-btn-primary">Open in customer</button>
        <button className="sr-btn">
          <SRIcon name="phone" /> Call back
        </button>
      </div>
    </aside>
  );
}

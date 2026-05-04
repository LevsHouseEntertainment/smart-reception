"use client";

import type { Call } from "@/lib/types";
import { TONE_BY_STATUS, LABEL_BY_STATUS } from "@/lib/data";
import { SRAvatar } from "@/components/ui/SRAvatar";
import { SRPill } from "@/components/ui/SRPill";
import { SRIcon } from "@/components/ui/SRIcon";

type RowProps = {
  call: Call;
  selected: boolean;
  onSelect: () => void;
  showDate?: boolean;
};

function CallRow({ call, selected, onSelect, showDate }: RowProps) {
  return (
    <button
      onClick={onSelect}
      className="sr-call-row"
      style={{
        display: "grid",
        gridTemplateColumns: "84px 36px minmax(0, 1fr) auto auto",
        gap: 16,
        alignItems: "center",
        width: "100%",
        padding: "14px 20px",
        border: 0,
        background: selected ? "rgba(196,154,42,0.08)" : "transparent",
        borderLeft: selected
          ? "3px solid var(--sr-color-accent)"
          : "3px solid transparent",
        borderBottom: "1px solid var(--sr-rule)",
        textAlign: "left",
        cursor: "pointer",
        fontFamily: "inherit",
        transition: "background .12s ease",
      }}
      onMouseEnter={(e) => {
        if (!selected) e.currentTarget.style.background = "rgba(26,37,48,0.03)";
      }}
      onMouseLeave={(e) => {
        if (!selected) e.currentTarget.style.background = "transparent";
      }}
    >
      <span className="sr-mono sr-small" style={{ color: "var(--sr-ink-3)" }}>
        {showDate && call.date ? `${call.date} · ${call.time}` : call.time}
      </span>
      <SRAvatar name={call.caller} tone={call.avatarTone} size={32} />
      <div style={{ minWidth: 0, overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 10, minWidth: 0 }}>
          <span
            style={{
              fontWeight: 600,
              fontSize: 14,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              minWidth: 0,
            }}
          >
            {call.caller}
          </span>
          <span
            className="sr-mono sr-small"
            style={{
              color: "var(--sr-ink-4)",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            {call.phone}
          </span>
        </div>
        <div
          className="sr-small"
          style={{
            color: "var(--sr-ink-2)",
            marginTop: 2,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {call.issue}
        </div>
      </div>
      <div style={{ minWidth: 180, textAlign: "right" }}>
        <div style={{ marginBottom: 4 }}>
          <SRPill tone={TONE_BY_STATUS[call.status]} dot>
            {LABEL_BY_STATUS[call.status]}
          </SRPill>
        </div>
        {call.outcome && (
          <div className="sr-small" style={{ color: "var(--sr-ink-3)" }}>
            {call.outcome}
          </div>
        )}
      </div>
      <SRIcon name="chev-r" color="var(--sr-ink-4)" />
    </button>
  );
}

type Props = {
  calls: Call[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  title?: string;
  countLabel?: string;
  footerLabel?: string;
  footerAction?: React.ReactNode;
  showDate?: boolean;
};

export function CallList({
  calls,
  selectedId,
  onSelect,
  title = "Today's calls",
  countLabel,
  footerLabel,
  footerAction,
  showDate = false,
}: Props) {
  const count = countLabel ?? `${calls.length} HANDLED`;
  return (
    <div className="sr-paper" style={{ overflow: "hidden" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "14px 20px",
          borderBottom: "1px solid var(--sr-rule)",
          flexWrap: "wrap",
        }}
      >
        <h2 className="sr-h3" style={{ margin: 0 }}>{title}</h2>
        <span className="sr-eyebrow" style={{ color: "var(--sr-ink-4)" }}>
          {count}
        </span>
        <div style={{ flex: 1 }} />
        <button className="sr-btn sr-btn-ghost" style={{ height: 30, fontSize: 12.5 }}>
          <SRIcon name="search" /> Search
        </button>
        <button className="sr-btn sr-btn-ghost" style={{ height: 30, fontSize: 12.5 }}>
          <SRIcon name="filter" /> All outcomes
        </button>
      </div>

      <div>
        {calls.map((c) => (
          <CallRow
            key={c.id}
            call={c}
            selected={selectedId === c.id}
            onSelect={() => onSelect(c.id)}
            showDate={showDate}
          />
        ))}
      </div>

      <div
        style={{
          padding: "12px 20px",
          display: "flex",
          gap: 12,
          alignItems: "center",
        }}
      >
        <span className="sr-small" style={{ color: "var(--sr-ink-3)" }}>
          {footerLabel ?? `Showing today · ${calls.length} calls`}
        </span>
        <div style={{ flex: 1 }} />
        {footerAction}
      </div>
    </div>
  );
}

import type { ReactNode } from "react";

type Props = {
  index?: number;
  label: string;
  action?: ReactNode;
};

export function SRSectionHeader({ index, label, action }: Props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "baseline",
        gap: 16,
        padding: "0 0 10px",
        borderBottom: "1px solid var(--sr-rule)",
      }}
    >
      {index != null && (
        <span className="sr-eyebrow" style={{ minWidth: 28 }}>
          {String(index).padStart(2, "0")}
        </span>
      )}
      <h2 className="sr-h3" style={{ margin: 0, flex: 1 }}>
        {label}
      </h2>
      {action}
    </div>
  );
}

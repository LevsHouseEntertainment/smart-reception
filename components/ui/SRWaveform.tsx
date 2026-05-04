"use client";

import { useMemo } from "react";

type Props = {
  height?: number;
  bars?: number;
  color?: string;
  live?: boolean;
};

const SEED = [
  22, 64, 38, 88, 52, 76, 30, 58, 18, 70, 44, 26, 82, 36,
  58, 22, 92, 48, 32, 64, 18, 78, 40, 56, 24, 70, 44, 90,
];

export function SRWaveform({
  height = 36,
  bars = 28,
  color = "var(--sr-color-accent)",
  live = true,
}: Props) {
  const heights = useMemo(
    () => Array.from({ length: bars }, (_, i) => SEED[i % SEED.length]),
    [bars],
  );
  const barW = 3;
  const gap = 3;
  const totalW = bars * barW + (bars - 1) * gap;

  return (
    <svg
      width="100%"
      height={height}
      viewBox={`0 0 ${totalW} ${height}`}
      preserveAspectRatio="none"
      style={{ display: "block" }}
      aria-hidden
    >
      {heights.map((pct, i) => {
        const barH = (pct / 100) * height;
        const y = (height - barH) / 2;
        const x = i * (barW + gap);
        return (
          <rect
            key={i}
            x={x}
            y={y}
            width={barW}
            height={barH}
            rx={1.5}
            fill={color}
            opacity={live ? 0.95 : 0.35}
          >
            {live && (
              <>
                <animate
                  attributeName="height"
                  values={`${barH};${barH * 0.4};${barH * 1.2};${barH * 0.7};${barH}`}
                  dur={`${0.9 + (i % 5) * 0.13}s`}
                  begin={`${i * 0.04}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="y"
                  values={`${y};${y + barH * 0.3};${y - barH * 0.1};${y + barH * 0.15};${y}`}
                  dur={`${0.9 + (i % 5) * 0.13}s`}
                  begin={`${i * 0.04}s`}
                  repeatCount="indefinite"
                />
              </>
            )}
          </rect>
        );
      })}
    </svg>
  );
}

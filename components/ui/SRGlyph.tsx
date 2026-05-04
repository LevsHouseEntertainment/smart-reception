type Props = {
  size?: number;
  animated?: boolean;
  color?: string;
};

export function SRGlyph({ size = 28, animated = false, color = "currentColor" }: Props) {
  // 9 bars, asymmetric — reads like a real waveform caught mid-call.
  const heights = [22, 64, 38, 88, 52, 76, 30, 58, 18];
  const barW = 6;
  const gap = 4;
  const totalW = heights.length * barW + (heights.length - 1) * gap;
  const h = 36;

  return (
    <svg
      width={size * (totalW / h)}
      height={size}
      viewBox={`0 0 ${totalW} ${h}`}
      style={{ display: "block", overflow: "visible" }}
      aria-hidden
    >
      {heights.map((pct, i) => {
        const barH = (pct / 100) * h;
        const y = (h - barH) / 2;
        const x = i * (barW + gap);
        return (
          <rect key={i} x={x} y={y} width={barW} height={barH} rx={1} fill={color}>
            {animated && (
              <animate
                attributeName="height"
                values={`${barH};${barH * 0.55};${barH * 1.15};${barH}`}
                dur={`${1.4 + (i % 4) * 0.18}s`}
                begin={`${i * 0.07}s`}
                repeatCount="indefinite"
              />
            )}
            {animated && (
              <animate
                attributeName="y"
                values={`${y};${y + barH * 0.225};${y - barH * 0.075};${y}`}
                dur={`${1.4 + (i % 4) * 0.18}s`}
                begin={`${i * 0.07}s`}
                repeatCount="indefinite"
              />
            )}
          </rect>
        );
      })}
    </svg>
  );
}

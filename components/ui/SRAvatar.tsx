import type { AvatarTone } from "@/lib/types";

type Props = {
  name: string;
  tone?: AvatarTone;
  size?: number;
};

const TONES: Record<AvatarTone, { bg: string; fg: string }> = {
  neutral: { bg: "var(--sr-canvas-2)", fg: "var(--sr-ink-2)" },
  slate:   { bg: "rgba(45,62,79,0.12)", fg: "var(--sr-color-brand)" },
  amber:   { bg: "rgba(196,154,42,0.16)", fg: "#8A6A14" },
  sage:    { bg: "rgba(58,107,74,0.14)", fg: "var(--sr-color-success)" },
};

export function SRAvatar({ name, tone = "neutral", size = 36 }: Props) {
  const initials = name
    .split(" ")
    .map((s) => s[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
  const t = TONES[tone];
  return (
    <div
      style={{
        width: size,
        height: size,
        flexShrink: 0,
        borderRadius: "50%",
        background: t.bg,
        color: t.fg,
        display: "grid",
        placeItems: "center",
        fontFamily: "var(--sr-display)",
        fontWeight: 700,
        fontSize: size * 0.36,
        letterSpacing: "-0.01em",
      }}
      aria-hidden
    >
      {initials}
    </div>
  );
}

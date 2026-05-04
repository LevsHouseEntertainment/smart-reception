import { SRGlyph } from "./SRGlyph";

type Size = "sm" | "md" | "lg" | "xl";
type Props = {
  size?: Size;
  animated?: boolean;
  color?: string;
};

const SIZE_PX: Record<Size, number> = { sm: 14, md: 18, lg: 26, xl: 36 };

export function SRWordmark({ size = "md", animated = false, color = "var(--sr-ink)" }: Props) {
  const px = SIZE_PX[size];
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: px * 0.5,
        color,
      }}
    >
      <SRGlyph size={px * 0.95} animated={animated} color={color} />
      <span
        style={{
          fontFamily: "var(--sr-display)",
          fontWeight: 700,
          fontSize: px,
          letterSpacing: "-0.02em",
          lineHeight: 1,
        }}
      >
        Smart Reception
      </span>
    </div>
  );
}

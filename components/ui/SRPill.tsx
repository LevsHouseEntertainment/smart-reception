import type { ReactNode } from "react";
import type { PillTone } from "@/lib/types";

type Props = {
  tone: PillTone;
  dot?: boolean;
  children: ReactNode;
};

export function SRPill({ tone, dot = false, children }: Props) {
  return (
    <span className="sr-pill" data-tone={tone}>
      {dot && <span className="dot" />}
      {children}
    </span>
  );
}

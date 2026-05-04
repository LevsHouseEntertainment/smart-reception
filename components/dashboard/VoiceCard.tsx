import Link from "next/link";
import type { VoiceOption } from "@/lib/types";
import { SRSectionHeader } from "@/components/ui/SRSectionHeader";
import { SRIcon } from "@/components/ui/SRIcon";

type Props = { voice: VoiceOption };

const VOICES: Record<VoiceOption, { title: string; desc: string }> = {
  warm:  { title: "Warm",  desc: "Greets by name, uses contractions, asks how their day's going." },
  plain: { title: "Plain", desc: "Direct and efficient. No small talk. Confirms and books." },
  crew:  { title: "Crew",  desc: "Sounds like one of your dispatchers. Knows the lingo." },
};

export function VoiceCard({ voice }: Props) {
  const v = VOICES[voice];
  return (
    <div className="sr-paper" style={{ padding: 20 }}>
      <SRSectionHeader index={2} label="Receptionist voice" />
      <div style={{ marginTop: 14 }}>
        <div className="sr-eyebrow" style={{ marginBottom: 4 }}>CURRENT</div>
        <div className="sr-h3" style={{ marginBottom: 4 }}>{v.title}</div>
        <p className="sr-small" style={{ margin: 0, color: "var(--sr-ink-2)" }}>
          {v.desc}
        </p>
      </div>
      <hr className="sr-rule" style={{ margin: "16px 0" }} />
      <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
        <button className="sr-btn" style={{ height: 32 }}>
          <SRIcon name="play" /> Hear sample
        </button>
        <span className="sr-small" style={{ color: "var(--sr-ink-3)" }}>0:34 sample</span>
        <div style={{ flex: 1 }} />
        <Link
          href="/settings/voice"
          className="sr-btn sr-btn-ghost"
          style={{ height: 32, fontSize: 12.5 }}
        >
          Clone your own voice <SRIcon name="chev-r" />
        </Link>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { PageHeader } from "@/components/dashboard/PageHeader";
import { SRPill } from "@/components/ui/SRPill";
import { SRWaveform } from "@/components/ui/SRWaveform";
import { SRIcon } from "@/components/ui/SRIcon";

type DefaultVoice = "warm" | "plain" | "crew";

const DEFAULT_VOICES: { id: DefaultVoice; title: string; desc: string }[] = [
  { id: "warm",  title: "Warm",  desc: "Greets by name, uses contractions, asks how their day's going." },
  { id: "plain", title: "Plain", desc: "Direct and efficient. No small talk. Confirms and books." },
  { id: "crew",  title: "Crew",  desc: "Sounds like one of your dispatchers. Knows the lingo." },
];

type Sample = { id: string; name: string; length: string; status: "ready" | "processing" };

const STARTER_SAMPLES: Sample[] = [
  { id: "s-1", name: "intro_recording.m4a", length: "0:34", status: "ready" },
  { id: "s-2", name: "voicemail_greeting.m4a", length: "0:18", status: "ready" },
];

export default function VoiceSettingsPage() {
  const [voice, setVoice] = useState<DefaultVoice | "cloned">("warm");
  const [samples, setSamples] = useState<Sample[]>(STARTER_SAMPLES);
  const [cloneStatus, setCloneStatus] =
    useState<"empty" | "ready-to-clone" | "cloned">("empty");

  const totalSeconds = samples.reduce((acc, s) => {
    const [m, sec] = s.length.split(":").map(Number);
    return acc + m * 60 + sec;
  }, 0);
  const totalMin = `${Math.floor(totalSeconds / 60)}:${String(totalSeconds % 60).padStart(2, "0")}`;
  const enoughForClone = totalSeconds >= 30;

  function addMockSample() {
    const next = samples.length + 1;
    setSamples([
      ...samples,
      { id: `s-${next}`, name: `recording_${next}.m4a`, length: "0:42", status: "ready" },
    ]);
    setCloneStatus("ready-to-clone");
  }

  function startClone() {
    setCloneStatus("cloned");
    setVoice("cloned");
  }

  return (
    <>
      <PageHeader
        eyebrow="SETTINGS · VOICE"
        title={
          <>
            Pick a voice, or
            <span style={{ color: "var(--sr-ink-3)", fontWeight: 600 }}> clone your own.</span>
          </>
        }
        lede="The receptionist uses ElevenLabs for voice synthesis. Upload 30+ seconds of clean audio to clone yours, or pick a stock voice."
        action={
          <Link href="/settings" className="sr-btn sr-btn-ghost" style={{ height: 32 }}>
            ← All settings
          </Link>
        }
      />

      <div style={{ padding: "0 28px 60px", display: "grid", gap: 24, maxWidth: 920, margin: "0 auto" }} className="sr-customers-pad">
        {/* Default voice picker */}
        <section className="sr-paper" style={{ padding: 22 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 14 }}>
            <span className="sr-eyebrow">01</span>
            <h2 className="sr-h3" style={{ margin: 0, flex: 1 }}>Default voices</h2>
            <span className="sr-small" style={{ color: "var(--sr-ink-3)" }}>
              Sourced from ElevenLabs · safe for production
            </span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
            {DEFAULT_VOICES.map((v) => {
              const active = voice === v.id;
              return (
                <button
                  key={v.id}
                  onClick={() => setVoice(v.id)}
                  style={{
                    textAlign: "left",
                    padding: 16,
                    border: active
                      ? "2px solid var(--sr-color-accent)"
                      : "1px solid var(--sr-rule)",
                    background: active ? "rgba(196,154,42,0.06)" : "var(--sr-paper)",
                    borderRadius: "var(--sr-r)",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    color: "inherit",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                    <span className="sr-h3" style={{ margin: 0 }}>{v.title}</span>
                    {active && <SRPill tone="booked" dot>SELECTED</SRPill>}
                  </div>
                  <p className="sr-small" style={{ margin: "0 0 12px", color: "var(--sr-ink-2)" }}>
                    {v.desc}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span
                      className="sr-btn sr-btn-ghost"
                      style={{ height: 28, fontSize: 12, padding: "0 8px" }}
                    >
                      <SRIcon name="play" /> 0:34 sample
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Voice cloning */}
        <section className="sr-paper" style={{ padding: 22 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 14 }}>
            <span className="sr-eyebrow">02</span>
            <h2 className="sr-h3" style={{ margin: 0, flex: 1 }}>Clone your voice</h2>
            {cloneStatus === "cloned" && <SRPill tone="live" dot>CONNECTED</SRPill>}
            {cloneStatus === "ready-to-clone" && <SRPill tone="warn" dot>READY TO CLONE</SRPill>}
            {cloneStatus === "empty" && <SRPill tone="info" dot>NEEDS 30S</SRPill>}
          </div>

          {cloneStatus !== "cloned" && (
            <>
              <p className="sr-small" style={{ margin: "0 0 18px", color: "var(--sr-ink-2)", maxWidth: "60ch" }}>
                Upload at least 30 seconds of clean speech — quiet room, your normal cadence, no
                background music. ElevenLabs trains an instant clone from these samples and the
                receptionist starts using it on the next call.
              </p>

              <div
                style={{
                  border: "1.5px dashed var(--sr-rule-strong)",
                  borderRadius: "var(--sr-r)",
                  padding: 28,
                  textAlign: "center",
                  background: "rgba(45,62,79,0.03)",
                  marginBottom: 16,
                }}
              >
                <div style={{ marginBottom: 10, color: "var(--sr-ink-3)" }}>
                  <SRIcon name="upload" size={22} />
                </div>
                <div style={{ fontWeight: 600, marginBottom: 4 }}>
                  Drop audio files here, or click to browse
                </div>
                <div className="sr-small" style={{ color: "var(--sr-ink-3)", marginBottom: 14 }}>
                  .mp3, .m4a, .wav · up to 25 MB each
                </div>
                <button className="sr-btn sr-btn-primary" onClick={addMockSample}>
                  Upload sample
                </button>
              </div>
            </>
          )}

          {samples.length > 0 && (
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              <div
                className="sr-eyebrow"
                style={{
                  paddingBottom: 8,
                  borderBottom: "1px solid var(--sr-rule)",
                  marginBottom: 4,
                }}
              >
                YOUR SAMPLES · {samples.length} · {totalMin} TOTAL
              </div>
              {samples.map((s, i) => (
                <div
                  key={s.id}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr 80px auto auto",
                    gap: 14,
                    alignItems: "center",
                    padding: "12px 0",
                    borderBottom:
                      i < samples.length - 1 ? "1px solid var(--sr-rule)" : "none",
                  }}
                >
                  <button
                    className="sr-btn sr-btn-ghost"
                    style={{ height: 30, padding: "0 8px" }}
                    aria-label="Play sample"
                  >
                    <SRIcon name="play" />
                  </button>
                  <div style={{ minWidth: 0 }}>
                    <div className="sr-mono" style={{ fontSize: 13, fontWeight: 500 }}>
                      {s.name}
                    </div>
                    <SRWaveform height={20} bars={36} live={false} color="var(--sr-ink-4)" />
                  </div>
                  <span className="sr-mono sr-small" style={{ color: "var(--sr-ink-3)" }}>
                    {s.length}
                  </span>
                  <SRPill tone={s.status === "ready" ? "booked" : "warn"} dot>
                    {s.status === "ready" ? "READY" : "PROCESSING"}
                  </SRPill>
                  <button
                    className="sr-btn sr-btn-ghost"
                    style={{ height: 30, padding: "0 8px", color: "var(--sr-ink-3)" }}
                    aria-label="Remove sample"
                    onClick={() =>
                      setSamples((cur) => cur.filter((x) => x.id !== s.id))
                    }
                  >
                    <SRIcon name="close" />
                  </button>
                </div>
              ))}

              {cloneStatus !== "cloned" && (
                <div
                  style={{
                    marginTop: 16,
                    display: "flex",
                    gap: 12,
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <button
                    className="sr-btn sr-btn-primary"
                    onClick={startClone}
                    disabled={!enoughForClone}
                    style={{ opacity: enoughForClone ? 1 : 0.5 }}
                  >
                    {enoughForClone
                      ? "Clone my voice with ElevenLabs"
                      : `Add ${Math.max(0, 30 - totalSeconds)}s more to clone`}
                  </button>
                  <span className="sr-small" style={{ color: "var(--sr-ink-3)" }}>
                    Cloning takes ~60 seconds.
                  </span>
                </div>
              )}
            </div>
          )}

          {cloneStatus === "cloned" && (
            <div
              style={{
                padding: 16,
                background: "rgba(58,107,74,0.06)",
                border: "1px solid rgba(58,107,74,0.3)",
                borderRadius: "var(--sr-r)",
                display: "flex",
                gap: 14,
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <SRIcon name="check" color="var(--sr-color-success)" size={20} />
              <div style={{ flex: 1, minWidth: 200 }}>
                <div className="sr-h3" style={{ marginBottom: 2 }}>Your voice is live.</div>
                <div className="sr-small" style={{ color: "var(--sr-ink-2)" }}>
                  ElevenLabs voice ID{" "}
                  <span className="sr-mono">jl_voice_4f2a91</span> · receptionist is using it on
                  every call.
                </div>
              </div>
              <button className="sr-btn">
                <SRIcon name="play" /> Hear yourself
              </button>
              <button
                className="sr-btn sr-btn-ghost"
                onClick={() => {
                  setCloneStatus("ready-to-clone");
                  setVoice("warm");
                }}
              >
                Re-clone
              </button>
            </div>
          )}
        </section>

        {/* Active voice summary */}
        <section className="sr-paper" style={{ padding: 22 }}>
          <div className="sr-eyebrow" style={{ marginBottom: 8 }}>CURRENTLY USING</div>
          <div className="sr-h2" style={{ marginBottom: 6 }}>
            {voice === "cloned" ? "Your cloned voice" : DEFAULT_VOICES.find((v) => v.id === voice)?.title}
          </div>
          <p className="sr-small" style={{ margin: 0, color: "var(--sr-ink-2)" }}>
            Changes apply to the next inbound call. The receptionist won&rsquo;t change voice mid-call.
          </p>
        </section>
      </div>
    </>
  );
}

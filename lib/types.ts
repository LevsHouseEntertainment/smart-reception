export type CallStatus = "live" | "booked" | "escalated" | "quote" | "filtered";
export type AvatarTone = "neutral" | "slate" | "amber" | "sage";
export type PillTone = "live" | "booked" | "escalated" | "warn" | "info";
export type ScheduleTone = "live" | "neutral" | "muted";

export type Call = {
  id: string;
  time: string;
  duration: string;
  caller: string;
  phone: string;
  issue: string;
  status: CallStatus;
  outcome: string | null;
  address: string | null;
  avatarTone: AvatarTone;
  date?: string;
};

export type ScheduleItem = {
  time: string;
  label: string;
  note: string;
  tone: ScheduleTone;
};

export type Customer = {
  id: string;
  name: string;
  phone: string;
  address: string | null;
  callCount: number;
  lastCall: string;
  lastIssue: string;
  avatarTone: AvatarTone;
};

export type VoiceOption = "warm" | "plain" | "crew";

type IconName =
  | "phone-in"
  | "phone"
  | "calendar"
  | "search"
  | "filter"
  | "chev-r"
  | "chev-d"
  | "settings"
  | "bell"
  | "check"
  | "alert"
  | "user"
  | "wrench"
  | "play"
  | "pause"
  | "dot"
  | "arrow-up-r"
  | "upload"
  | "menu"
  | "close";

type Props = {
  name: IconName;
  size?: number;
  color?: string;
};

export function SRIcon({ name, size = 16, color = "currentColor" }: Props) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "phone-in":
      return (
        <svg {...common}>
          <path d="M5 4h3l1.5 4-2 1.5a12 12 0 0 0 6 6L15 13.5 19 15v3a2 2 0 0 1-2.2 2A16 16 0 0 1 3 6.2 2 2 0 0 1 5 4z" />
          <path d="M15 4l4 4M19 4l-4 4" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M5 4h3l1.5 4-2 1.5a12 12 0 0 0 6 6L15 13.5 19 15v3a2 2 0 0 1-2.2 2A16 16 0 0 1 3 6.2 2 2 0 0 1 5 4z" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M3 10h18M8 3v4M16 3v4" />
        </svg>
      );
    case "search":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="6" />
          <path d="m20 20-4-4" />
        </svg>
      );
    case "filter":
      return (
        <svg {...common}>
          <path d="M4 5h16M7 12h10M10 19h4" />
        </svg>
      );
    case "chev-r":
      return (
        <svg {...common}>
          <path d="m9 6 6 6-6 6" />
        </svg>
      );
    case "chev-d":
      return (
        <svg {...common}>
          <path d="m6 9 6 6 6-6" />
        </svg>
      );
    case "settings":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
        </svg>
      );
    case "bell":
      return (
        <svg {...common}>
          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
          <path d="M10 21a2 2 0 0 0 4 0" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <path d="m4 12 5 5L20 6" />
        </svg>
      );
    case "alert":
      return (
        <svg {...common}>
          <path d="M12 3 2 21h20L12 3z" />
          <path d="M12 9v5M12 17h.01" />
        </svg>
      );
    case "user":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21a8 8 0 0 1 16 0" />
        </svg>
      );
    case "wrench":
      return (
        <svg {...common}>
          <path d="M14.7 6.3a4 4 0 1 1-1.4 5.4L4 21l-1.5-1.5L11.3 11a4 4 0 0 1 3.4-4.7z" />
        </svg>
      );
    case "play":
      return (
        <svg {...common}>
          <path d="M7 4v16l13-8z" fill={color} />
        </svg>
      );
    case "pause":
      return (
        <svg {...common}>
          <rect x="6" y="4" width="4" height="16" fill={color} />
          <rect x="14" y="4" width="4" height="16" fill={color} />
        </svg>
      );
    case "dot":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" fill={color} />
        </svg>
      );
    case "arrow-up-r":
      return (
        <svg {...common}>
          <path d="M7 17 17 7M9 7h8v8" />
        </svg>
      );
    case "upload":
      return (
        <svg {...common}>
          <path d="M12 4v12M6 10l6-6 6 6" />
          <path d="M4 20h16" />
        </svg>
      );
    case "menu":
      return (
        <svg {...common}>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      );
    case "close":
      return (
        <svg {...common}>
          <path d="M6 6l12 12M6 18 18 6" />
        </svg>
      );
    default:
      return null;
  }
}

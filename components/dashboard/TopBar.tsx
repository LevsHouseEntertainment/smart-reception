"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SRWordmark } from "@/components/ui/SRWordmark";
import { SRPill } from "@/components/ui/SRPill";
import { SRAvatar } from "@/components/ui/SRAvatar";
import { SRIcon } from "@/components/ui/SRIcon";

type NavItem = { label: string; href: string };

const NAV: NavItem[] = [
  { label: "Today",     href: "/" },
  { label: "All calls", href: "/calls" },
  { label: "Schedule",  href: "/schedule" },
  { label: "Customers", href: "/customers" },
  { label: "Settings",  href: "/settings" },
];

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function TopBar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        gap: 24,
        padding: "16px 28px",
        borderBottom: "1px solid var(--sr-rule)",
        background: "var(--sr-canvas)",
        position: "sticky",
        top: 0,
        zIndex: 5,
        flexWrap: "wrap",
      }}
    >
      <Link
        href="/"
        style={{ display: "inline-flex", color: "inherit", textDecoration: "none" }}
        aria-label="Smart Reception home"
      >
        <SRWordmark size="md" animated />
      </Link>
      <span className="sr-eyebrow" style={{ marginLeft: 4 }}>
        v0.1 · Operator
      </span>

      <nav
        className="sr-topnav"
        style={{
          display: "flex",
          gap: 4,
          marginLeft: 24,
        }}
      >
        {NAV.map((n) => {
          const active = isActive(pathname, n.href);
          return (
            <Link
              key={n.href}
              href={n.href}
              className="sr-btn sr-btn-ghost"
              style={{
                height: 32,
                fontWeight: active ? 700 : 500,
                whiteSpace: "nowrap",
                flexShrink: 0,
                color: active ? "var(--sr-ink)" : "var(--sr-ink-3)",
                background: active ? "rgba(26,37,48,0.06)" : "transparent",
              }}
            >
              {n.label}
            </Link>
          );
        })}
      </nav>

      <div style={{ flex: 1 }} />

      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <SRPill tone="live" dot>
          Agent live
        </SRPill>
        <button className="sr-btn sr-btn-ghost" aria-label="Notifications">
          <SRIcon name="bell" />
        </button>
        <SRAvatar name="Justin L" tone="slate" size={32} />
        <button
          className="sr-btn sr-btn-ghost sr-mobile-only"
          aria-label="Menu"
          onClick={() => setMobileOpen((o) => !o)}
        >
          <SRIcon name={mobileOpen ? "close" : "menu"} />
        </button>
      </div>

      {mobileOpen && (
        <nav
          className="sr-mobile-nav"
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 0,
            borderTop: "1px solid var(--sr-rule)",
            paddingTop: 12,
            marginTop: 4,
          }}
        >
          {NAV.map((n) => {
            const active = isActive(pathname, n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  padding: "12px 4px",
                  fontWeight: active ? 700 : 500,
                  color: active ? "var(--sr-ink)" : "var(--sr-ink-2)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--sr-rule)",
                }}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}

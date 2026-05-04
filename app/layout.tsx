import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Figtree, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/dashboard/TopBar";
import { AppFooter } from "@/components/dashboard/AppFooter";

const display = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const text = Figtree({
  variable: "--font-text",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Smart Reception",
  description: "AI receptionist for service operators — never miss a call between jobs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${text.variable} ${mono.variable}`}
    >
      <body>
        <div className="sr-app">
          <TopBar />
          {children}
          <AppFooter />
        </div>
      </body>
    </html>
  );
}

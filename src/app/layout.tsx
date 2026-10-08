import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Jules Gossiaux — Portfolio",
    template: "%s — Jules Gossiaux",
  },
  description: "Rugby, projects, websites, and things made along the way.",
  openGraph: {
    title: "Jules Gossiaux — Portfolio",
    description: "Rugby, projects, websites, and things made along the way.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#171916",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Orbitron, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.illustrex.co"),
  title: {
    default: "Illustrex | Creative Portfolio",
    template: "%s | Illustrex",
  },
  description:
    "Illustrex is a creative production studio delivering branding, social, campaign, and visual storytelling work.",
  openGraph: {
    title: "Illustrex | Creative Portfolio",
    description:
      "Explore selected creative work by Illustrex across branding, campaigns, and digital experiences.",
    url: "https://www.illustrex.co",
    siteName: "Illustrex",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${orbitron.variable} h-full antialiased`}>
      <body className="min-h-full">
        {children}
        <Analytics />
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AgriSchedule – Porters Community Farm",
    template: "%s · AgriSchedule",
  },
  description:
    "Community farm volunteer scheduling and inventory for Porters Community Farm in Gainesville, FL.",
  keywords: [
    "AgriSchedule",
    "Porters Community Farm",
    "Gainesville",
    "volunteer scheduling",
    "farm inventory",
  ],
  icons: { icon: "/favicon.ico" },
  applicationName: "AgriSchedule",
  authors: [{ name: "AgriSchedule" }],
  category: "productivity",
  openGraph: {
    title: "AgriSchedule – Porters Community Farm",
    description:
      "Coordinate volunteers, post shifts, and track farm inventory in one place.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AgriSchedule",
    description:
      "Community farm volunteer scheduling and inventory in one place.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2E7D32" },
    { media: "(prefers-color-scheme: dark)", color: "#2E7D32" },
  ],
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-[var(--background)] text-[var(--foreground)]`}
      >
        {children}
      </body>
    </html>
  );
}

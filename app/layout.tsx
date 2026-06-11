import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";

export const metadata: Metadata = {
  title: "Masuma Aktar — Digital Marketer",
  description:
    "Portfolio of Masuma Aktar, a results-driven digital marketer specialising in Facebook Ads, Google Ads, SEO, Landing Pages, and Conversion Tracking. Open to freelance and remote work.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

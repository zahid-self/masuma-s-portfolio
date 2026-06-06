import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";

export const metadata: Metadata = {
  title: "Masuma Aktar — Digital Marketer",
  description:
    "Portfolio of Masuma Aktar, a passionate digital marketer specialising in SEO, paid ads, social media, content, and analytics. Open to work.",
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

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fork & Flex — Food and fitness for real life",
  description:
    "An adaptive fitness and food coach that finds your next realistic move when the day changes.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

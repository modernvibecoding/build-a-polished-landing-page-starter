import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Build a Polished Landing Page",
  description: "Starter for the Build a Polished Landing Page guided project.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}

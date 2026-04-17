import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AdsMini | High-Converting Leads",
  description: "Data-driven marketing strategies to scale your business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark scroll-smooth"
    >
      <body className={`${inter.variable} font-sans min-h-screen bg-background text-foreground antialiased selection:bg-blue-500/30`}>{children}</body>
    </html>
  );
}

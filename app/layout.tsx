import type { Metadata } from "next";
import { Open_Sans, Oxygen } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const oxygen = Oxygen({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-oxygen",
});

export const metadata: Metadata = {
  title: "Patrick Weygand Resume",
  description: "The resume for frontend developer Patrick Weygand",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/logo192.png",
  },
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable} ${oxygen.variable}`}>
      <body>{children}</body>
    </html>
  );
}

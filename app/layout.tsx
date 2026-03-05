import type { Metadata } from "next";
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
  title: "David's Betta Care",
  description: "Premium Betta Fish from David's Betta Care",
  openGraph: {
    title: "David's Betta Care",
    description: "Premium Betta Fish from David's Betta Care",
    images: [
      {
        url: '/b3.webp',
        width: 1200,
        height: 630,
        alt: "David's Betta Care",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "David's Betta Care",
    description: "Premium Betta Fish from David's Betta Care",
    images: ['/b3.webp'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

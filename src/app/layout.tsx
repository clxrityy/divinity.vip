import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "divinity",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <title>
          divinity
        </title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta property="og:title" content="divinity" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="a divine place to be anonymous" />
        <meta name="theme-color" content="#52789a" />
        <meta property="og:image" content="https://www.divinity.vip/apple-touch-icon.png" />
        <meta property="og:image:alt" content="diamond logo icon" />
        <meta property="og:image:width" content="128" />
        <meta property="og:image:height" content="128" />
        <meta property="og:image:type" content="image/png" />
        <meta property="twitter:image" content="/favicon-32x32.png" />
        <meta property="twitter:card" content="/apple-touch-icon.png" />
        <meta property="twitter:title" content="divinity" />
        <meta property="twitter:description" content="a divine place to be anonymous" />
        <meta property="description" content="share divine notes with the world anonymously" />
        <meta property="og:url" content="https://divinity.vip" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

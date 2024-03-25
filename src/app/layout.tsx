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
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="og:title" content="divinity" />
        <meta name="og:type" content="website" />
        <meta name="og:description" content="a divine place to be anonymous" />
        <meta name="theme-color" content="#52789a" />
        <meta name="og:image" content={`https://www.divinity.vip/favicon-32x32.png`} />
        <meta name="og:image:alt" content="diamond logo icon" />
        <meta name="og:image:width" content="32" />
        <meta name="og:image:height" content="32" />
        <meta name="og:image:type" content="image/png" />
        <meta name="twitter:image" content={`https://www.divinity.vip/favicon-32x32.png`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="divinity" />
        <meta name="twitter:creator" content="@yourclxrity" />
        <meta name="twitter:description" content="a divine place to be anonymous" />
        <meta name="description" content="share divine notes with the world anonymously" />
        <meta name="og:url" content="https://divinity.vip" />
        <meta name="keywords" content="divinity, vip, anonymity, anonymous, confessions, advice, stories, global, secret, divine, theories, clxrity, georgia, athens, universe, explained" />
        <meta name="og:country-name" content="USA" />
        <meta name="og:region" content="GA" />
        <meta name="og:postal-code" content="30606" />
        <meta name="subject" content="divine anonymous  notes to the world" />
        <meta name="target" content="all" />
        <meta name="og:email" content="contact@mjanglin.com" />
        <meta name="news_keywords" content="anonymous, divine, universe" />
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

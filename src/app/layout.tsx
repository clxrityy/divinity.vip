import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/layout/Footer";

const figtree = Figtree({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "divinity",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    description: "a divine place to be anonymous",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
      <link rel="canonical" href="https://www.divinity.vip" />
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
        <meta name="description" content="share divine notes with the world anonymously" />
        <meta name="og:title" content="divinity" />
        <meta name="og:type" content="website" />
        <meta name="og:description" content="a divine place to be anonymous" />
        <meta name="theme-color" content="#52789a" />
        <meta property="og:image" content={`https://www.divinity.vip/favicon-32x32.png`} />
        <meta property="og:image:alt" content="diamond logo icon" />
        <meta property="og:image:width" content="32" />
        <meta property="og:image:height" content="32" />
        <meta property="og:image:type" content="image/png" />
        <meta property="twitter:image" content={`https://www.divinity.vip/favicon-32x32.png`} />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content="divinity" />
        <meta property="twitter:creator" content="@yourclxrity" />
        <meta property="twitter:description" content="a divine place to be anonymous" />
        <meta property="description" content="share divine notes with the world anonymously" />
        <meta property="og:url" content="https://divinity.vip" />
        <meta name="keywords" content="divinity, vip, anonymity, anonymous, confessions, advice, stories, global, secret, divine, theories, clxrity, georgia, athens, universe, explained" />
        <meta name="og:country-name" content="USA" />
        <meta name="og:region" content="GA" />
        <meta name="og:postal-code" content="30606" />
        <meta name="subject" content="divine anonymous  notes to the world" />
        <meta name="target" content="all" />
        <meta name="og:email" content="contact@mjanglin.com" />
        <meta name="news_keywords" content="anonymous, divine, universe" />
      </head>
      <body className={figtree.className}>
        <div className="max-h-screen h-screen relative">
          <Navbar />
          {children}
          <div className="fixed w-full">
          <Footer />
          </div>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

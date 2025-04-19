// app/layout.tsx
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/700.css";
import type { Metadata } from "next";
import Chakra from "@/components/providers/Chakra";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
// import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "EbubeCode",
  description:
    "Explore the portfolio of Victor Ebubechukwu, a frontend developer specializing in React, Next.js, and modern web technologies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/_next/static/media/manrope-latin-400.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/_next/static/media/manrope-latin-500.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/_next/static/media/manrope-latin-600.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/_next/static/media/manrope-latin-700.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/_next/static/media/manrope-latin-800.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Chakra>
          <main>{children}</main>
        </Chakra>
        <Analytics />
        {/* <SpeedInsights /> */}
      </body>
    </html>
  );
}

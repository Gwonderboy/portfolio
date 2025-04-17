// app/layout.tsx
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/700.css";
import type { Metadata } from "next";
import Chakra from "@/components/providers/Chakra";
import './globals.css';

export const metadata: Metadata = {
  title: "EbubeCode",
  description: "Created by Victor Ebubechukwu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Chakra>{children}</Chakra>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "@/styles/index.css";

export const metadata: Metadata = {
  title: "Card Match",
  description: "Match pairs of hidden cards to win the game.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

import { Noto_Sans_KR } from "next/font/google";
import type { Metadata } from "next";
import "@/styles/index.css";

export const metadata: Metadata = {
  title: "Card Match",
  description: "Match pairs of hidden cards to win the game.",
  icons: {
    icon: "/favicon.ico",
  },
};

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={notoSansKR.className}>
      <body className="flex flex-col min-h-screen">{children}</body>
    </html>
  );
}

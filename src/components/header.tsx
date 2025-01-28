import { Bangers } from "next/font/google";

const bangers = Bangers({ weight: "400", subsets: ["latin"], display: "swap" });

export default function Header() {
  return (
    <header className="mt-10 text-center text-5xl sm:text-7xl text-secondary">
      <span className={bangers.className}>CARD MATCH</span>
    </header>
  );
}

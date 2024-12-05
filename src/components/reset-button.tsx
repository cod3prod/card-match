"use client";

import useGame from "@/hooks/use-game";
import { GrPowerReset } from "react-icons/gr";

export default function ResetButton() {
  const { handleReset } = useGame();

  return (
    <button
      className="absolute rounded-full bg-button w-10 h-10 text-secondary top-2 right-2"
      onClick={handleReset}
    >
      <GrPowerReset className="text-2xl" />
    </button>
  );
}

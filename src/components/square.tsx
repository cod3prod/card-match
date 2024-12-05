"use client";

import useGame from "@/hooks/use-game";
import React from "react";

const Square = React.memo(function Square({
  index,
  value,
}: {
  index: number;
  value: string | null;
}) {
  const { handlePlay } = useGame();

  return (
    <div
      className="w-full aspect-square bg-default rounded-md shadow-sm shadow-black flex justify-center items-center cursor-pointer text-4xl sm:text-6xl"
      onClick={() => handlePlay(index)}
    >
      {value}
    </div>
  );
});

Square.displayName = "Square";
export default Square;

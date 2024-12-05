"use client";

import useGame from "@/hooks/use-game";
import Board from "./board";
import GameInfo from "./game-info";

export default function Game() {
  const { state} = useGame();

  return (
    <main className="grow relative container max-w-xl mx-auto p-4">
      <Board
        squares={state.squares}
        score={state.score}
      />
      <GameInfo state={state} />
    </main>
  );
}

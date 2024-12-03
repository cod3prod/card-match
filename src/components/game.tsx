"use client";

import Board from "./board";
import { useGame } from "@/hooks/useGame";
import GameInfo from "./game-info";

export default function Game() {
  const { state, handlePlay, handleReset } = useGame();

  return (
    <main className="grow relative container max-w-xl mx-auto p-4">
      <Board
        squares={state.squares}
        score={state.score}
        onPlay={handlePlay}
        onReset={handleReset}
      />
      <GameInfo state={state} />
    </main>
  );
}

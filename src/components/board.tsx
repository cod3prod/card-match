import Square from "./square";
import { GrPowerReset } from "react-icons/gr";

export default function Board({
  squares,
  score,
  onPlay,
  gameReset,
}: {
  squares: (string | null)[];
  score: number;
  onPlay: (index: number) => void;
  gameReset: () => void;
}) {
  const allSquares = squares.map((square, idx) => (
    <Square
      key={idx}
      value={square}
      onSquareClick={() => {
        onPlay(idx);
      }}
    />
  ));

  return (
    <div className="relative w-full p-4 rounded-md bg-secondary flex flex-col justify-center">
      <button className="absolute rounded-full bg-button w-10 h-10 text-secondary top-2 right-2" onClick={gameReset}>
        <GrPowerReset className="text-2xl" />
      </button>
      <div className="mb-2 text-2xl text-center font-bold">
        {score <= 6
          ? `Pairs left: ${8 - score}`
          : score === 7
          ? "Last One!!!!"
          : "You cleared it!"}
      </div>
      <div className="w-full aspect-square grid grid-cols-4 grid-rows-4 gap-4">
        {allSquares}
      </div>
    </div>
  );
}

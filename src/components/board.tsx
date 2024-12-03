import ResetButton from "./reset-button";
import Square from "./square";

export default function Board({
  squares,
  score,
  onPlay,
  onReset,
}: {
  squares: (string | null)[];
  score: number;
  onPlay: (index: number) => void;
  onReset: () => void;
}) {
  return (
    <section className="relative w-full p-4 rounded-md bg-secondary flex flex-col justify-center">
      <ResetButton onReset={onReset} />
      <div className="mb-2 text-2xl text-center font-bold">
        {score <= 6
          ? `Pairs left: ${8 - score}`
          : score === 7
          ? "Last One!!!!"
          : "You cleared it!"}
      </div>
      <div className="w-full aspect-square grid grid-cols-4 grid-rows-4 gap-4">
        {squares.map((square, index) => (
          <Square
            key={index}
            index={index}
            value={square}
            onSquareClick={onPlay}
          />
        ))}
      </div>
    </section>
  );
}

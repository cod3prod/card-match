import ResetButton from "./reset-button";
import Square from "./square";

export default function Board({
  squares,
  score,
}: {
  squares: (string | null)[];
  score: number;
}) {
  return (
    <section className="p-4 relative w-full rounded-md bg-secondary flex flex-col justify-center">
      <ResetButton />
      <div className="mb-2 text-2xl text-center font-bold">
        {score <= 6
          ? `PAIRS LEFT: ${8 - score}`
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
          />
        ))}
      </div>
    </section>
  );
}

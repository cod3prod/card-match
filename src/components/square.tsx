"use client";

export default function Square({
  index,
  value,
  onSquareClick,
}: {
  index: number;
  value: string | null;
  onSquareClick: (index: number) => void;
}) {
  return (
    <div
      className="w-full aspect-square bg-default rounded-md shadow-sm shadow-black flex justify-center items-center cursor-pointer text-4xl sm:text-6xl"
      onClick={() => onSquareClick(index)}
    >
      {value}
    </div>
  );
}

"use client";

export default function Square({
  value,
  onSquareClick,
}: {
  value: string | null;
  onSquareClick: () => void;
}) {

  return (
    <div
      className="w-full aspect-square bg-default rounded-md shadow-sm shadow-black flex justify-center items-center cursor-pointer text-4xl sm:text-6xl "
      onClick={onSquareClick}
    >
      {value}
    </div>
  );
}

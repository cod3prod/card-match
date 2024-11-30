"use client";

import { useEffect, useRef } from "react";

export default function Square({
  value,
  onSquareClick,
}: {
  value: string | null;
  onSquareClick: () => void;
}) {
  const squareRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const adjustFontSize = () => {
      if (squareRef.current) {
        const width = squareRef.current.clientWidth;
        squareRef.current.style.fontSize = `${width * 0.7}px`;
      }
    };

    adjustFontSize();
    window.addEventListener("resize", adjustFontSize);

    return () => {
      window.removeEventListener("resize", adjustFontSize);
    };
  }, []);

  return (
    <div ref={squareRef} className="square" onClick={onSquareClick}>
      {value}
    </div>
  );
}

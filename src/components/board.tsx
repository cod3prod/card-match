import Square from "./square";

export default function Board({ squares, score, onPlay }: {
  squares: (string | null)[];
  score: number;
  onPlay: (index: number) => void;
}) {
    const allSquares = squares.map((square, idx) => (
      <Square key={idx} value={square} onSquareClick={() => { onPlay(idx); }} />
    ));
  
    return (
      <div className='board'>
        <div className='status'>
          {
            score<=6 ? `Pairs left: ${8-score}`
            : score === 7 ? 'Last One!!!!' : 'You cleared it!'
          }
        </div>
        {allSquares}
      </div>
    );
  }
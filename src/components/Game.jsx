import { useState } from "react";
import Board from "./Board";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 == 0;
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
  };

  const moves = history.map((squares, move) => {
    let desc;
    if (move > 0) {
      desc = "Go to move #" + move;
    } else {
      desc = "Go to game start";
    }

    return (
      <li key={move}>
        <button
          onClick={() => jumpTo(move)}
          className="my-2 border border-gray-500 bg-sky-700 text-white rounded-lg text-xl w-44 hover:bg-sky-800"
        >
          {desc}
        </button>
      </li>
    );
  });

  return (
    <div className="flex items-center justify-center gap-40 w-full">
      <div>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>

      <div className="bg-slate-800 p-4 border border-gray-500 rounded-xl text-center">
        <h1 className="text-4xl font-bold text-white font-mono mb-5">
          Time Line
        </h1>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

export default Game;

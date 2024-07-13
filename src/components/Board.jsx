import { useState, useEffect } from "react";
import Square from "./Square";
import calculateWinner from "../utils/calculateWinner";
import cross from "/assets/cross.png";
import circle from "/assets/circle.png";
import PropTypes from "prop-types";

const Board = ({ xIsNext, squares, onPlay }) => {
  const [winCountX, setWinCountX] = useState(0);
  const [winCountO, setWinCountO] = useState(0);
  const [status, setStatus] = useState("Next player: X");

  useEffect(() => {
    const winner = calculateWinner(squares);
    if (winner) {
      if (winner === cross) {
        setStatus("Winner: X");
        setWinCountX((prev) => prev + 1);
      } else {
        setStatus("Winner: O");
        setWinCountO((prev) => prev + 1);
      }
    } else if (squares.every((square) => square !== null)) {
      setStatus("It's a draw!");
    } else {
      setStatus(`Next player: ${xIsNext ? "X" : "O"}`);
    }
  }, [squares, xIsNext]);

  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? cross : circle;
    onPlay(nextSquares);
  };

  return (
    <>
      <div className="flex flex-col h-full w-full items-center p-4">
        <div
          id="status"
          className="flex items-center justify-center h-16 w-full max-w-xl m-10 bg-white rounded-xl text-2xl font-bold text-slate-800 font-mono sm:text-4xl"
        >
          {status}
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-xs sm:max-w-md lg:max-w-lg">
          {squares.map((square, index) => (
            <Square
              key={index}
              value={square}
              onSquareClick={() => handleClick(index)}
              className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32"
            />
          ))}
        </div>

        <div className="border border-gray-500 w-full max-w-xl mt-10 mx-5 mb-4"></div>

        <div className="flex gap-x-24 text-center">
          <div className="flex flex-col items-center">
            <img src={cross} alt="cross" className="w-8 sm:w-12" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold font-mono mt-4">
              {winCountX}
            </h2>
          </div>

          <div className="h-28 border border-gray-500"></div>

          <div className="flex flex-col items-center">
            <img src={circle} alt="circle" className="w-8 sm:w-12" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold font-mono mt-4">
              {winCountO}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

Board.propTypes = {
  xIsNext: PropTypes.bool.isRequired,
  squares: PropTypes.array.isRequired,
  onPlay: PropTypes.func.isRequired,
};

export default Board;

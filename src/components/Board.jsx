import { useState } from "react";
import Square from "./Square";
import calculateWinner from "../utils/calculateWinner";
import cross from "../../public/assets/cross.png";
import circle from "../../public/assets/circle.png";

const Board = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? cross : circle;
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    if (xIsNext) {
      status = "Winner: O";
      document.getElementById("status").style.backgroundColor = "#fa5252";
    } else {
      status = "Winner: X";
      document.getElementById("status").style.backgroundColor = "green";
    }
    document.getElementById("status").style.color = "white";
  } else if (squares.every((square) => square !== null)) {
    status = "It's a draw!";
    document.getElementById("status").style.backgroundColor = "skyblue";
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <>
      <div className="fixed right-6 top-6 max-md:hidden">
        <button
          onClick={() => {
            setSquares(Array(9).fill(null));
            setXIsNext(true);
            document.getElementById("status").style.backgroundColor = "white";
            document.getElementById("status").style.color = "#1e293b";
          }}
          className=" flex items-center justify-center border-2 bg-red-700 text-white w-28 h-12 font-semibold text-2xl p-4 rounded-lg"
        >
          Reset
        </button>
      </div>
      <div className="flex flex-col h-full w-full items-center">
        <div
          id="status"
          className="flex items-center justify-center h-16 w-96 my-12 bg-white rounded-xl text-4xl font-bold text-slate-800 font-mono max-md:w-80"
        >
          {status}
        </div>
        <div className="flex mt-16">
          <div className="flex flex-col text-4xl">
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
            <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
          </div>
          <div className="flex flex-col text-4xl">
            <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
            <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
            <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
          </div>
          <div className="flex flex-col text-4xl">
            <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
            <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
            <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Board;

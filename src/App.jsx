import { useState } from "react";

function Square({ value, onClickSquare }) {
  return (
    <button className="square" onClick={onClickSquare}>
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  function calculateWinner() {}
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // columns
    [0, 4, 8],
    [2, 4, 6], // diagonals
  ];
  for (let combo of winningCombinations) {
    if (
      squares[combo[0]] == squares[combo[1]] &&
      squares[combo[1]] == squares[combo[2]]
    ) {
      if (squares[combo[0]] !== null) {
        return console.log(`${squares[combo[0]]} is a Winner`);
      }
    }
  }

  function handleClick(i) {
    let nextSquares = squares.slice();

    if (squares[i] || !calculateWinner) {
      return;
    } else {
      nextSquares[i] = isX ? "X" : "O";
      setSquares(nextSquares);
      setIsX(!isX);
    }
  }

  calculateWinner();
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onClickSquare={() => handleClick(0)} />
        <Square value={squares[1]} onClickSquare={() => handleClick(1)} />
        <Square value={squares[2]} onClickSquare={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onClickSquare={() => handleClick(3)} />
        <Square value={squares[4]} onClickSquare={() => handleClick(4)} />
        <Square value={squares[5]} onClickSquare={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onClickSquare={() => handleClick(6)} />
        <Square value={squares[7]} onClickSquare={() => handleClick(7)} />
        <Square value={squares[8]} onClickSquare={() => handleClick(8)} />
      </div>
    </>
  );
}

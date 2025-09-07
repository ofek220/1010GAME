import React from "react";

function Board() {
  const board = Array(10)
    .fill(0)
    .map(() => Array(10).fill(0));

  return (
    <div id="board">
      {board.map((row, rowIndex) => (
        <div className="board-row" key={rowIndex}>
          {row.map((square, squareIndex) => (
            <div className="board-square" key={squareIndex}></div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;

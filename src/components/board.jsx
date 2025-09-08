import React from "react";

function Board() {
  const board = Array(10)
    .fill(0)
    .map(() => Array(10).fill(0));

  return (
    <div id="board-div">
      <div id="board">
        {board.flat().map((value, index) => (
          <div className="board-square" key={index}></div>
        ))}
      </div>
    </div>
  );
}

export default Board;

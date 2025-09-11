import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./Constants";
import DropPiece from "./DropPieces";

function Board() {
  const board = Array(10)
    .fill(0)
    .map(() => Array(10).fill(0));

  return (
    <div id="board-div">
      <div id="board">
        {board.flat().map((value, index) => {
          const row = Math.floor(index / 10);
          const col = index % 10;
          return <DropPiece key={index} row={row} col={col} occupied={board} />;
        })}
      </div>
    </div>
  );
}

export default Board;

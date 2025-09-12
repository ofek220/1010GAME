import React, { useState } from "react";
import DropPiece from "./DropPieces";

function Board() {
  const board = Array(10)
    .fill(0)
    .map(() => Array(10).fill(0));

  const [hoveredSquares, setHoveredSquares] = useState([]);
  function handleHoverSquares(hoveredSquares) {
    setHoveredSquares(hoveredSquares);
  }

  function handleDropPiece() {
    setHoveredSquares([]);
  }

  return (
    <div id="board-div">
      <div id="board">
        {board.flat().map((value, index) => {
          const row = Math.floor(index / 10);
          const col = index % 10;

          const squareIsHovered = hoveredSquares.some(
            (square) => square.row === row && square.col === col
          );

          const squareValidHover = hoveredSquares.every(
            (square) => square.valid
          );

          return (
            <DropPiece
              key={index}
              row={row}
              col={col}
              occupied={board}
              onHover={handleHoverSquares}
              onDrop={handleDropPiece}
              squareIsHovered={squareIsHovered}
              squareValidHover={squareValidHover}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Board;

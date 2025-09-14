import React, { useState } from "react";
import DropPiece from "./DropPieces";

function Board() {
  const [board, setBoard] = useState(
    Array(10)
      .fill(0)
      .map(() => Array(10).fill(null))
  );

  const [hoveredSquares, setHoveredSquares] = useState([]);
  function handleHoverSquares(hoveredSquares) {
    setHoveredSquares(hoveredSquares);
  }

  function handleDropPiece(item, row, col) {
    setHoveredSquares([]);
    const newBoard = board.map((r) => r.slice());

    item.piece.shape.forEach(([offSetRow, offSetCol]) => {
      const targetRow = row + offSetRow;
      const targetCol = col + offSetCol;
      console.log("Placing piece at:", targetRow, targetCol);
      newBoard[targetRow][targetCol] = { ...item.piece };
    });
    setBoard(newBoard);
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

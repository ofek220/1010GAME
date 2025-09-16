import React, { useEffect, useState } from "react";
import DropPiece from "./DropPieces";
import { pieces } from "./Pieces";
import Rules from "./Rules";

function Board() {
  const [board, setBoard] = useState(
    Array(10)
      .fill(0)
      .map(() => Array(10).fill(null))
  );

  // func for clearing a row
  function newRow(rowIndex) {
    const newBoard = board.map((row, i) =>
      i === rowIndex ? Array(10).fill(null) : row
    );
    setBoard(newBoard);
  }

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
      newBoard[targetRow][targetCol] = { className: item.piece.className };
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
              board={board}
              onHover={handleHoverSquares}
              onDrop={handleDropPiece}
              squareIsHovered={squareIsHovered}
              squareValidHover={squareValidHover}
              occupied={value !== null}
            />
          );
        })}
      </div>
      <Rules board={board} newRow={newRow} />
    </div>
  );
}

export default Board;

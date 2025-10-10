import React, { useEffect } from "react";

function PlayerRules({ board, newRow, newCol, randomPieceArray, onGameOver }) {
  function gameOver(board, randomPieceArray) {
    return !randomPieceArray.some((piece) => {
      if (!piece.shape) return false;
      for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 10; col++) {
          const pieceFits = piece.shape.every(([r, c]) => {
            const targetRow = row + r;
            const targetCol = col + c;
            return (
              targetRow >= 0 &&
              targetRow < 10 &&
              targetCol >= 0 &&
              targetCol < 10 &&
              board[targetRow][targetCol] === null
            );
          });

          if (pieceFits) {
            return true;
          }
        }
      }
      return false;
    });
  }

  useEffect(() => {
    if (randomPieceArray && randomPieceArray.length > 0) {
      const isOver = gameOver(board, randomPieceArray);
      if (isOver) {
        onGameOver();
      }
    }
  }, [board, randomPieceArray, onGameOver]);
  return null;
}
export default PlayerRules;

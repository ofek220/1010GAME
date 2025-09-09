import React from "react";
import { pieces } from "./pieces";

function getGridSize(shape) {
  const rows = Math.max(...shape.map(([r]) => r)) + 1;
  const cols = Math.max(...shape.map(([, c]) => c)) + 1;
  return { rows, cols };
}

function PlayerArea() {
  // pick 3 random pieces from pieces.jsx to display in player area
  const randomPiece = Array.from({ length: 3 }, () => {
    const randomIndex = Math.floor(Math.random() * pieces.length);
    return pieces[randomIndex];
  });

  return (
    <div id="player-area">
      {randomPiece.map((piece, i) => {
        const { rows, cols } = getGridSize(piece.shape);

        // Create a grid and mark filled cells
        const grid = Array.from({ length: rows }, () =>
          Array.from({ length: cols }, () => null)
        );
        piece.shape.forEach(([r, c]) => {
          grid[r][c] = true;
        });

        return (
          <div
            key={i}
            className="piece-area"
            style={{
              display: "grid",
              gridTemplateRows: `repeat(${rows}, 50px)`,
              gridTemplateColumns: `repeat(${cols}, 50px)`,
              gap: "2px",
            }}
          >
            {grid.flat().map((cell, idx) => (
              <div
                key={idx}
                className={
                  cell ? piece.className + " board-square" : "board-square"
                }
                style={{ visibility: cell ? "visible" : "hidden" }}
              ></div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default PlayerArea;

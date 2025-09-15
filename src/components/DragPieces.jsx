import React from "react";
import { pieces } from "./Pieces";
import { ItemTypes } from "./Constants";
import { useDrag } from "react-dnd";

function getGridSize(shape) {
  const rows = Math.max(...shape.map(([r]) => r)) + 1;
  const cols = Math.max(...shape.map(([, c]) => c)) + 1;
  return { rows, cols };
}

function DragPiece({ piece, onPlaced }) {
  const { rows, cols } = getGridSize(piece.shape);

  // Create a grid and mark filled cells
  const grid = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => null)
  );
  piece.shape.forEach(([r, c]) => {
    grid[r][c] = true;
  });

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.PIECE,
    item: { piece },
    options: {
      effectAllowed: "move",
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    end(item, monitor) {
      const didDrop = monitor.didDrop();
      if (didDrop) {
        onPlaced(item.piece.id);
      }
    },
  }));

  return (
    <div
      ref={drag}
      className="piece-area"
      style={{
        display: "grid",
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gap: "0",
        opacity: isDragging ? 0 : 1,
      }}
    >
      {grid.flat().map((cell, idx) => (
        <div
          key={idx}
          className={cell ? piece.className + " board-square" : "board-square"}
          style={{ visibility: cell ? "visible" : "hidden" }}
        ></div>
      ))}
    </div>
  );
}
export default DragPiece;

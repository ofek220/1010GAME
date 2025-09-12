import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./Constants";

function DropPiece({
  row,
  col,
  onDrop,
  occupied,
  onHover,
  squareIsHovered,
  squareValidHover,
}) {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.PIECE,
    hover: (item, monitor) => {
      const hoveredSquares = item.piece.shape.map(([r, c]) => {
        const targetRow = row + r;
        const targetCol = col + c;
        const isValid =
          targetRow >= 0 &&
          targetRow < 10 &&
          targetCol >= 0 &&
          targetCol < 10 &&
          !occupied[targetRow][targetCol];

        return { row: targetRow, col: targetCol, valid: isValid };
      });
      onHover(hoveredSquares);
    },

    drop: (droppedItem, monitor) => {
      onDrop(droppedItem, row, col);
    },
    canDrop: (item) => {
      for (let [r, c] of item.piece.shape) {
        let targetRow = row + r;
        let targetCol = col + c;
        if (
          targetRow < 0 ||
          targetRow >= 10 ||
          targetCol < 0 ||
          targetCol >= 10
        ) {
          return false;
        }

        if (occupied[targetRow][targetCol]) {
          return false;
        }
      }
      return true;
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
      getItem: monitor.getItem(),
    }),
  }));

  let bgColor = "#f8b259";
  if (squareIsHovered) {
    bgColor = squareValidHover ? "lightgreen" : "red";
  } else if (isOver && canDrop) {
    bgColor = "lightgreen";
  } else if (isOver && !canDrop) {
    bgColor = "red";
  }

  return (
    <div
      ref={drop}
      className="board-square"
      style={{ backgroundColor: bgColor }}
    ></div>
  );
}

export default DropPiece;

import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./Constants";

function DropPiece({
  row,
  col,
  onDrop,
  board,
  onHover,
  squareIsHovered,
  squareValidHover,
}) {
  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
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
            !board[targetRow][targetCol];

          return { row: targetRow, col: targetCol, valid: isValid };
        });
        onHover(hoveredSquares);
      },

      drop: (item, monitor) => {
        onDrop(item, row, col);
        return { dropEffect: "move" };
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

          if (board[targetRow][targetCol]) {
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
    }),
    [board, row, col]
  );

  const piece = board[row]?.[col];
  let bgColor = "var(--bgColor)"; // main board color
  if (squareIsHovered) {
    bgColor = squareValidHover ? "lightgreen" : "red";
  }

  return (
    <div
      ref={drop}
      className={`board-square ${piece ? piece.className : ""}`}
      style={{ backgroundColor: bgColor }}
    ></div>
  );
}

export default DropPiece;

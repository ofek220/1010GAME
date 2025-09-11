import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./Constants";

function DropPiece({ row, col, onDrop, occupied }) {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.PIECE,
    drop: (item, monitor) => {
      console.log("Dropped:", item);
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

  const BgHoverColor = isOver ? (canDrop ? "lightgreen" : "red") : "#f8b259";

  return (
    <div
      ref={drop}
      className="board-square"
      style={{ backgroundColor: BgHoverColor }}
    ></div>
  );
}

export default DropPiece;

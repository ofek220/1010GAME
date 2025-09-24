import React from "react";
import { useDragLayer } from "react-dnd";
import DragPiece from "./DragPieces";

export default function CustomDragLayer() {
  const { isDragging, item, currentOffset } = useDragLayer((monitor) => ({
    isDragging: monitor.isDragging(),
    item: monitor.getItem(),
    currentOffset: monitor.getSourceClientOffset(),
  }));

  if (!isDragging || !currentOffset || !item) return null;

  const { x, y } = currentOffset;

  return (
    <div
      style={{
        position: "fixed",
        pointerEvents: "none",
        top: y,
        left: x,
        zIndex: 1000,
        opacity: 0.8,
      }}
    >
      <DragPiece piece={item.piece} onPlaced={() => {}} />
    </div>
  );
}

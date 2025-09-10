import React from "react";
import { pieces } from "./Pieces";
import DragPiece from "./DragPieces";

function PlayerArea() {
  // pick 3 random pieces from pieces.jsx to display in player area
  const randomPiece = Array.from({ length: 3 }, () => {
    const randomIndex = Math.floor(Math.random() * pieces.length);
    return pieces[randomIndex];
  });

  return (
    <div id="player-area">
      {randomPiece.map((piece, i) => (
        <DragPiece key={i} piece={piece} />
      ))}
    </div>
  );
}

export default PlayerArea;

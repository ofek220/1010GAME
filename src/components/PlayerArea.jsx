import React from "react";
import { pieces } from "./pieces";

function PlayerArea() {
  // pick 3 random pieces from pieces.jsx to display in player area
  const randomPiece = Array.from({ length: 3 }, () => {
    const randomIndex = Math.floor(Math.random() * pieces.length);
    return pieces[randomIndex];
  });

  console.log(randomPiece);

  return (
    <div id="player-area">
      {randomPiece.map((piece, i) => (
        <div key={i} className="piece-area">
          {piece.id}
        </div>
      ))}
    </div>
  );
}

export default PlayerArea;

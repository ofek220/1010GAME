import React, { useState } from "react";
import { pieces } from "./Pieces";
import DragPiece from "./DragPieces";
import { v4 as uuidv4 } from "uuid";

function PlayerArea() {
  // pick 3 random pieces from pieces.jsx to display in player area
  const [randomPieceArray, setRandomPieceArray] = useState(
    Array.from({ length: 3 }, () => {
      const randomIndex = Math.floor(Math.random() * pieces.length);
      return { ...pieces[randomIndex], id: uuidv4() };
    })
  );

  function onPlaced(pieceId) {
    setRandomPieceArray((prevArray) => {
      const newArray = prevArray.filter((piece) => piece.id !== pieceId);

      if (newArray.length === 0) {
        // refill with 3 new random pieces
        return Array.from({ length: 3 }, () => {
          const randomIndex = Math.floor(Math.random() * pieces.length);
          return { ...pieces[randomIndex], id: uuidv4() };
        });
      }
      return newArray;
    });
  }

  return (
    <div id="player-area">
      {randomPieceArray.map((piece, i) => (
        <DragPiece key={piece.id} piece={piece} onPlaced={onPlaced} />
      ))}
    </div>
  );
}

export default PlayerArea;

import React, { useEffect, useState } from "react";

function Score({ board }) {
  const [points, setPoints] = useState(0);

  useEffect(() => {
    if (!Array.isArray(board) || board.length === 0) return;
    const filledRows = board.filter((row) =>
      row.every((cell) => cell !== null)
    ).length;

    const filledCols = board[0]
      ? board[0]
          .map((_, colIndex) => board.every((row) => row[colIndex] !== null))
          .filter(Boolean).length
      : 0;

    const totalPoints = filledRows + filledCols;
    if (totalPoints > 0) {
      setPoints((prev) => prev + totalPoints * 10);
    }
  }, [board]);

  if (points < 0) {
    return (
      <div id="score">
        <h1>1010GAME</h1>
      </div>
    );
  } else {
    return (
      <div id="score">
        <h1>{points}</h1>
      </div>
    );
  }
}

export default Score;

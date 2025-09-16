import React, { useEffect } from "react";

function Rules({ board, newRow }) {
  useEffect(() => {
    if (!board) return;
    board.forEach((row, rowIndex) => {
      if (!row) return;
      if (row.every((cell) => cell !== null)) {
        console.log(`Row ${rowIndex} is completely filled.`);
        newRow(rowIndex);
      }
    });
  }, [board, newRow]);
  return null;
}
export default Rules;

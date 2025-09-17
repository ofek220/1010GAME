import React, { useEffect } from "react";

function Rules({ board, newRow, newCol }) {
  useEffect(() => {
    if (!board) return;
    board.forEach((row, rowIndex) => {
      if (!row) return;
      if (row.every((cell) => cell !== null)) {
        console.log(`Row ${rowIndex} is completely filled.`);
        newRow(rowIndex);
      }
    });
  }, [newRow]);

  useEffect(() => {
    for (let col = 0; col < 10; col++) {
      let fullColumn = true;

      for (let row = 0; row < 10; row++) {
        if (board[row]?.[col] === null) {
          fullColumn = false;
          break;
        }
      }
      if (fullColumn) {
        console.log(`Column ${col} is completely filled.`);
        newCol(col);
      }
    }
  }, [newCol]);
}
export default Rules;

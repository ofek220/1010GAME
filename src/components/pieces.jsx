import React from "react";

// row, col - shape of the piece
// 0,0 is the top-left corner of the piece

export const pieces = [
  { className: "square1x1", shape: [[0, 0]] }, // square1x1

  {
    className: "square2x1",
    shape: [
      [0, 0],
      [0, 1],
    ],
  }, // square2x1

  {
    className: "square3x1",
    shape: [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
  }, // square3x1

  {
    className: "square4x1",
    shape: [
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
    ],
  }, // square4x1

  {
    className: "square2x2",
    shape: [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
  }, // square2x2

  {
    className: "L-shape",
    shape: [
      [0, 0],
      [1, 0],
      [2, 0],
      [2, 1],
    ],
  }, // L-shape
];

// corrently 5 pieces defined

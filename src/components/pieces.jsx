import React from "react";

// x,y coordinates after name of each piece for the shape of the piece
// 0,0 is the top-left corner of the piece
// square1x1

export const pieces = [
  { id: "square1x1", shape: [[0, 0]] }, // square1x1
  {
    id: "square2x1",
    shape: [
      [0, 0],
      [0, 1],
    ],
  }, // square2x1
  {
    id: "square3x1",
    shape: [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
  }, // square3x1
  {
    id: "square4x1",
    shape: [
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
    ],
  }, // square4x1
];

// corrently 4 pieces defined

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
    className: "square1x2",
    shape: [
      [0, 0],
      [1, 0],
    ],
  }, // square1x2

  {
    className: "square3x1",
    shape: [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
  }, // square3x1

  {
    className: "square1x3",
    shape: [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
  }, // square1x3

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
    className: "square1x4",
    shape: [
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
    ], // square1x4
  },

  {
    className: "square5x1",
    shape: [
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
    ],
  }, // square5x1

  {
    className: "square1x5",
    shape: [
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 0],
    ],
  }, // square1x5

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

  {
    className: "L-shape-upside-down",
    shape: [
      [0, 0],
      [0, 1],
      [1, 0],
      [2, 0],
    ],
  }, // L-shape-upside-down

  {
    className: "L-shape-mirrored",
    shape: [
      [0, 1],
      [1, 1],
      [2, 1],
      [2, 0],
    ],
  }, // L-shape-mirrored

  {
    className: "small-L-shape",
    shape: [
      [0, 0],
      [1, 0],
      [1, 1],
    ],
  }, // small-L-shape

  {
    className: "small-L-shape-mirrored",
    shape: [
      [0, 1],
      [1, 1],
      [1, 0],
    ],
  }, // small-L-shape-mirrored

  {
    className: "small-L-upside-down",
    shape: [
      [0, 0],
      [0, 1],
      [1, 0],
    ],
  }, // small-L-mirrored-rotated

  {
    className: "small-L-upside-down-mirrored",
    shape: [
      [0, 0],
      [0, 1],
      [1, 1],
    ],
  }, // small-L-upside-down-mirrored

  {
    className: "square3x3",
    shape: [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 0],
      [1, 1],
      [1, 2],
      [2, 0],
      [2, 1],
      [2, 2],
    ],
  }, // square3x3
];

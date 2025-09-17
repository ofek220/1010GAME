import React from "react";

// row, col - shape of the piece
// 0,0 is the top-left corner of the piece

export const pieces = [
  { className: "square1x1", shape: [[0, 0]] }, // square1x1

  // {
  //   className: "square2x1",
  //   shape: [
  //     [0, 0],
  //     [0, 1],
  //   ],
  // }, // square2x1

  // {
  //   className: "square1x2",
  //   shape: [
  //     [0, 0],
  //     [1, 0],
  //   ],
  // }, // square1x2

  // {
  //   className: "square3x1",
  //   shape: [
  //     [0, 0],
  //     [0, 1],
  //     [0, 2],
  //   ],
  // }, // square3x1

  // {
  //   className: "square1x3",
  //   shape: [
  //     [0, 0],
  //     [1, 0],
  //     [2, 0],
  //   ],
  // }, // square1x3

  // {
  //   className: "square4x1",
  //   shape: [
  //     [0, 0],
  //     [0, 1],
  //     [0, 2],
  //     [0, 3],
  //   ],
  // }, // square4x1

  // {
  //   className: "square1x4",
  //   shape: [
  //     [0, 0],
  //     [1, 0],
  //     [2, 0],
  //     [3, 0],
  //   ], // square1x4
  // },

  // {
  //   className: "square5x1",
  //   shape: [
  //     [0, 0],
  //     [0, 1],
  //     [0, 2],
  //     [0, 3],
  //     [0, 4],
  //   ],
  // }, // square5x1

  // {
  //   className: "square1x5",
  //   shape: [
  //     [0, 0],
  //     [1, 0],
  //     [2, 0],
  //     [3, 0],
  //     [4, 0],
  //   ],
  // }, // square1x5

  // {
  //   className: "square2x2",
  //   shape: [
  //     [0, 0],
  //     [0, 1],
  //     [1, 0],
  //     [1, 1],
  //   ],
  // }, // square2x2

  // {
  //   className: "L-shape",
  //   shape: [
  //     [0, 0],
  //     [1, 0],
  //     [2, 0],
  //     [2, 1],
  //   ],
  // }, // L-shape

  // {
  //   className: "L-shape-upside-down",
  //   shape: [
  //     [0, 0],
  //     [0, 1],
  //     [1, 0],
  //     [2, 0],
  //   ],
  // }, // L-shape-upside-down

  // {
  //   className: "L-shape-mirrored",
  //   shape: [
  //     [0, 1],
  //     [1, 1],
  //     [2, 1],
  //     [2, 0],
  //   ],
  // }, // L-shape-mirrored

  // {
  //   className: "small-L-shape",
  //   shape: [
  //     [0, 0],
  //     [1, 0],
  //     [1, 1],
  //   ],
  // }, // small-L-shape

  // {
  //   className: "small-L-shape-mirrored",
  //   shape: [
  //     [0, 1],
  //     [1, 1],
  //     [1, 0],
  //   ],
  // }, // small-L-shape-mirrored

  // {
  //   className: "small-L-upside-down",
  //   shape: [
  //     [0, 0],
  //     [0, 1],
  //     [1, 0],
  //   ],
  // }, // small-L-mirrored-rotated

  // {
  //   className: "small-L-upside-down-mirrored",
  //   shape: [
  //     [0, 0],
  //     [0, 1],
  //     [1, 1],
  //   ],
  // }, // small-L-upside-down-mirrored

  // {
  //   className: "square3x3",
  //   shape: [
  //     [0, 0],
  //     [0, 1],
  //     [0, 2],
  //     [1, 0],
  //     [1, 1],
  //     [1, 2],
  //     [2, 0],
  //     [2, 1],
  //     [2, 2],
  //   ],
  // }, // square3x3

  {
    className: "square9x9", // test piece
    shape: [
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
      [0, 5],
      [0, 6],
      [0, 7],
      [0, 8],
      [1, 0],
      [1, 1],
      [1, 2],
      [1, 3],
      [1, 4],
      [1, 5],
      [1, 6],
      [1, 7],
      [1, 8],
      [2, 0],
      [2, 1],
      [2, 2],
      [2, 3],
      [2, 4],
      [2, 5],
      [2, 6],
      [2, 7],
      [2, 8],
      [3, 0],
      [3, 1],
      [3, 2],
      [3, 3],
      [3, 4],
      [3, 5],
      [3, 6],
      [3, 7],
      [3, 8],
      [4, 0],
      [4, 1],
      [4, 2],
      [4, 3],
      [4, 4],
      [4, 5],
      [4, 6],
      [4, 7],
      [4, 8],
      [5, 0],
      [5, 1],
      [5, 2],
      [5, 3],
      [5, 4],
      [5, 5],
      [5, 6],
      [5, 7],
      [5, 8],
      [6, 0],
      [6, 1],
      [6, 2],
      [6, 3],
      [6, 4],
      [6, 5],
      [6, 6],
      [6, 7],
      [6, 8],
      [7, 0],
      [7, 1],
      [7, 2],
      [7, 3],
      [7, 4],
      [7, 5],
      [7, 6],
      [7, 7],
      [7, 8],
      [8, 0],
      [8, 1],
      [8, 2],
      [8, 3],
      [8, 4],
      [8, 5],
      [8, 6],
      [8, 7],
      [8, 8],
    ],
  },
];

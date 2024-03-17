"use strict";

window.addEventListener("DOMContentLoaded", start);

const maze = {
  rows: 6,
  cols: 7,
  start: {
    row: 0,
    col: 0,
  },
  goal: {
    row: 3,
    col: 6,
  },
  maze: [
    [
      {
        row: 0,
        col: 0,
        north: true,
        east: false,
        west: true,
        south: true,
        visited: false,
      },
      {
        row: 0,
        col: 1,
        north: true,
        east: true,
        west: false,
        south: false,
        visited: false,
      },
      {
        row: 0,
        col: 2,
        north: true,
        east: false,
        west: true,
        south: false,
        visited: false,
      },
      {
        row: 0,
        col: 3,
        north: true,
        east: true,
        west: false,
        south: false,
        visited: false,
      },
      {
        row: 0,
        col: 4,
        north: true,
        east: false,
        west: true,
        south: true,
        visited: false,
      },
      {
        row: 0,
        col: 5,
        north: true,
        east: false,
        west: false,
        south: false,
        visited: false,
      },
      {
        row: 0,
        col: 6,
        north: true,
        east: true,
        west: false,
        south: false,
        visited: false,
      },
    ],
    [
      {
        row: 1,
        col: 0,
        north: true,
        east: true,
        west: true,
        south: false,
        visited: false,
      },
      {
        row: 1,
        col: 1,
        north: false,
        east: false,
        west: true,
        south: true,
        visited: false,
      },
      {
        row: 1,
        col: 2,
        north: false,
        east: true,
        west: false,
        south: true,
        visited: false,
      },
      {
        row: 1,
        col: 3,
        north: false,
        east: true,
        west: true,
        south: false,
        visited: false,
      },
      {
        row: 1,
        col: 4,
        north: true,
        east: false,
        west: true,
        south: false,
        visited: false,
      },
      {
        row: 1,
        col: 5,
        north: false,
        east: true,
        west: false,
        south: true,
        visited: false,
      },
      {
        row: 1,
        col: 6,
        north: false,
        east: true,
        west: true,
        south: false,
        visited: false,
      },
    ],
    [
      {
        row: 2,
        col: 0,
        north: false,
        east: false,
        west: true,
        south: false,
        visited: false,
      },
      {
        row: 2,
        col: 1,
        north: true,
        east: false,
        west: false,
        south: true,
        visited: false,
      },
      {
        row: 2,
        col: 2,
        north: true,
        east: false,
        west: false,
        south: true,
        visited: false,
      },
      {
        row: 2,
        col: 3,
        north: false,
        east: true,
        west: false,
        south: true,
        visited: false,
      },
      {
        row: 2,
        col: 4,
        north: false,
        east: true,
        west: true,
        south: false,
        visited: false,
      },
      {
        row: 2,
        col: 5,
        north: true,
        east: false,
        west: true,
        south: false,
        visited: false,
      },
      {
        row: 2,
        col: 6,
        north: false,
        east: true,
        west: false,
        south: true,
        visited: false,
      },
    ],
    [
      {
        row: 3,
        col: 0,
        north: false,
        east: false,
        west: true,
        south: true,
        visited: false,
      },
      {
        row: 3,
        col: 1,
        north: true,
        east: true,
        west: false,
        south: false,
        visited: false,
      },
      {
        row: 3,
        col: 2,
        north: true,
        east: false,
        west: true,
        south: false,
        visited: false,
      },
      {
        row: 3,
        col: 3,
        north: true,
        east: false,
        west: false,
        south: true,
        visited: false,
      },
      {
        row: 3,
        col: 4,
        north: false,
        east: true,
        west: false,
        south: true,
        visited: false,
      },
      {
        row: 3,
        col: 5,
        north: false,
        east: true,
        west: true,
        south: false,
        visited: false,
      },
      {
        row: 3,
        col: 6,
        north: true,
        east: true,
        west: true,
        south: false,
        visited: false,
      },
    ],
    [
      {
        row: 4,
        col: 0,
        north: true,
        east: false,
        west: true,
        south: false,
        visited: false,
      },
      {
        row: 4,
        col: 1,
        north: false,
        east: true,
        west: false,
        south: true,
        visited: false,
      },
      {
        row: 4,
        col: 2,
        north: false,
        east: false,
        west: true,
        south: true,
        visited: false,
      },
      {
        row: 4,
        col: 3,
        north: true,
        east: true,
        west: false,
        south: false,
        visited: false,
      },
      {
        row: 4,
        col: 4,
        north: true,
        east: true,
        west: true,
        south: false,
        visited: false,
      },
      {
        row: 4,
        col: 5,
        north: false,
        east: true,
        west: true,
        south: false,
        visited: false,
      },
      {
        row: 4,
        col: 6,
        north: false,
        east: true,
        west: true,
        south: false,
        visited: false,
      },
    ],
    [
      {
        row: 5,
        col: 0,
        north: false,
        east: false,
        west: true,
        south: true,
        visited: false,
      },
      {
        row: 5,
        col: 1,
        north: true,
        east: false,
        west: false,
        south: true,
        visited: false,
      },
      {
        row: 5,
        col: 2,
        north: true,
        east: false,
        west: false,
        south: true,
        visited: false,
      },
      {
        row: 5,
        col: 3,
        north: false,
        east: true,
        west: false,
        south: true,
        visited: false,
      },
      {
        row: 5,
        col: 4,
        north: false,
        east: false,
        west: true,
        south: true,
        visited: false,
      },
      {
        row: 5,
        col: 5,
        north: false,
        east: false,
        west: false,
        south: true,
        visited: false,
      },
      {
        row: 5,
        col: 6,
        north: false,
        east: true,
        west: false,
        south: true,
        visited: false,
      },
    ],
  ],
};

const maze2 = {
  rows: 10,
  cols: 10,
  start: {
    row: 0,
    col: 0,
    north: true,
    east: false,
    west: true,
    south: false,
    isCurrentCell: false,
    isNextCell: false,
    isStart: true,
    isGoal: false,
  },
  goal: {
    row: 9,
    col: 9,
    north: true,
    east: true,
    west: false,
    south: true,
    isCurrentCell: false,
    isNextCell: false,
    isStart: false,
    isGoal: true,
  },
  maze: [
    [
      {
        row: 0,
        col: 0,
        north: true,
        east: false,
        west: true,
        south: false,
        isCurrentCell: false,
        isNextCell: false,
        isStart: true,
        isGoal: false,
      },
      {
        row: 0,
        col: 1,
        north: true,
        east: true,
        west: false,
        south: false,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 0,
        col: 2,
        north: true,
        east: false,
        west: true,
        south: false,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 0,
        col: 3,
        north: true,
        east: false,
        west: false,
        south: true,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 0,
        col: 4,
        north: true,
        east: true,
        west: false,
        south: false,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 0,
        col: 5,
        north: true,
        east: true,
        west: true,
        south: false,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 0,
        col: 6,
        north: true,
        east: true,
        west: true,
        south: false,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 0,
        col: 7,
        north: true,
        east: true,
        west: true,
        south: false,
        isCurrentCell: true,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 0,
        col: 8,
        north: true,
        east: false,
        west: true,
        south: false,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 0,
        col: 9,
        north: true,
        east: true,
        west: false,
        south: true,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
    ],
    [
      {
        row: 1,
        col: 0,
        north: false,
        east: true,
        west: true,
        south: false,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 1,
        col: 1,
        north: false,
        east: false,
        west: true,
        south: true,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 1,
        col: 2,
        north: false,
        east: true,
        west: false,
        south: false,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 1,
        col: 3,
        north: true,
        east: false,
        west: true,
        south: true,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 1,
        col: 4,
        north: false,
        east: true,
        west: false,
        south: false,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 1,
        col: 5,
        north: false,
        east: false,
        west: true,
        south: false,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 1,
        col: 6,
        north: false,
        east: true,
        west: false,
        south: false,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 1,
        col: 7,
        north: false,
        east: false,
        west: true,
        south: false,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 1,
        col: 8,
        north: false,
        east: false,
        west: false,
        south: false,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 1,
        col: 9,
        north: true,
        east: true,
        west: false,
        south: true,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
    ],
    [
      {
        row: 2,
        col: 0,
        north: false,
        east: false,
        west: true,
        south: false,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 2,
        col: 1,
        north: true,
        east: false,
        west: false,
        south: true,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 2,
        col: 2,
        north: false,
        east: false,
        west: false,
        south: true,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 2,
        col: 3,
        north: true,
        east: true,
        west: false,
        south: true,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 2,
        col: 4,
        north: false,
        east: true,
        west: true,
        south: true,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 2,
        col: 5,
        north: false,
        east: true,
        west: true,
        south: true,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 2,
        col: 6,
        north: false,
        east: false,
        west: true,
        south: true,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 2,
        col: 7,
        north: false,
        east: true,
        west: false,
        south: true,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 2,
        col: 8,
        north: false,
        east: true,
        west: true,
        south: false,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 2,
        col: 9,
        north: true,
        east: true,
        west: true,
        south: false,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
    ],
    [
      {
        row: 3,
        col: 0,
        north: false,
        east: true,
        west: true,
        south: false,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 3,
        col: 1,
        north: true,
        east: false,
        west: true,
        south: false,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 3,
        col: 2,
        north: true,
        east: false,
        west: false,
        south: true,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 3,
        col: 3,
        north: true,
        east: true,
        west: false,
        south: false,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 3,
        col: 4,
        north: true,
        east: false,
        west: true,
        south: false,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 3,
        col: 5,
        north: true,
        east: true,
        west: false,
        south: false,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 3,
        col: 6,
        north: true,
        east: false,
        west: true,
        south: false,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 3,
        col: 7,
        north: true,
        east: false,
        west: false,
        south: true,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 3,
        col: 8,
        north: false,
        east: false,
        west: false,
        south: true,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 3,
        col: 9,
        north: false,
        east: true,
        west: false,
        south: true,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
    ],
    [
      {
        row: 4,
        col: 0,
        north: false,
        east: false,
        west: true,
        south: false,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 4,
        col: 1,
        north: false,
        east: true,
        west: false,
        south: true,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 4,
        col: 2,
        north: true,
        east: false,
        west: true,
        south: false,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 4,
        col: 3,
        north: false,
        east: true,
        west: false,
        south: true,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 4,
        col: 4,
        north: false,
        east: true,
        west: true,
        south: true,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 4,
        col: 5,
        north: false,
        east: false,
        west: true,
        south: false,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 4,
        col: 6,
        north: false,
        east: true,
        west: false,
        south: false,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 4,
        col: 7,
        north: true,
        east: false,
        west: true,
        south: true,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 4,
        col: 8,
        north: true,
        east: false,
        west: false,
        south: false,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 4,
        col: 9,
        north: true,
        east: true,
        west: false,
        south: false,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
    ],
    [
      {
        row: 5,
        col: 0,
        north: false,
        east: false,
        west: true,
        south: true,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 5,
        col: 1,
        north: true,
        east: true,
        west: false,
        south: true,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 5,
        col: 2,
        north: false,
        east: false,
        west: true,
        south: true,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 5,
        col: 3,
        north: true,
        east: true,
        west: false,
        south: false,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 5,
        col: 4,
        north: true,
        east: false,
        west: true,
        south: true,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 5,
        col: 5,
        north: false,
        east: true,
        west: false,
        south: true,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 5,
        col: 6,
        north: false,
        east: true,
        west: true,
        south: false,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 5,
        col: 7,
        north: true,
        east: false,
        west: true,
        south: true,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 5,
        col: 8,
        north: false,
        east: true,
        west: false,
        south: true,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 5,
        col: 9,
        north: false,
        east: true,
        west: true,
        south: false,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
    ],
    [
      {
        row: 6,
        col: 0,
        north: true,
        east: false,
        west: true,
        south: false,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 6,
        col: 1,
        north: true,
        east: true,
        west: false,
        south: true,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 6,
        col: 2,
        north: true,
        east: true,
        west: true,
        south: false,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 6,
        col: 3,
        north: false,
        east: false,
        west: true,
        south: true,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 6,
        col: 4,
        north: true,
        east: false,
        west: false,
        south: true,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 6,
        col: 5,
        north: true,
        east: false,
        west: false,
        south: false,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 6,
        col: 6,
        north: false,
        east: false,
        west: false,
        south: false,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 6,
        col: 7,
        north: true,
        east: true,
        west: false,
        south: true,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 6,
        col: 8,
        north: true,
        east: true,
        west: true,
        south: false,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 6,
        col: 9,
        north: false,
        east: true,
        west: true,
        south: false,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
    ],
    [
      {
        row: 7,
        col: 0,
        north: false,
        east: false,
        west: true,
        south: true,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 7,
        col: 1,
        north: true,
        east: true,
        west: false,
        south: false,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 7,
        col: 2,
        north: false,
        east: true,
        west: true,
        south: false,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 7,
        col: 3,
        north: true,
        east: false,
        west: true,
        south: false,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 7,
        col: 4,
        north: true,
        east: true,
        west: false,
        south: true,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 7,
        col: 5,
        north: false,
        east: true,
        west: true,
        south: true,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 7,
        col: 6,
        north: false,
        east: false,
        west: true,
        south: true,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 7,
        col: 7,
        north: true,
        east: false,
        west: false,
        south: true,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 7,
        col: 8,
        north: false,
        east: false,
        west: false,
        south: false,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 7,
        col: 9,
        north: false,
        east: true,
        west: false,
        south: false,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
    ],
    [
      {
        row: 8,
        col: 0,
        north: true,
        east: false,
        west: true,
        south: false,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 8,
        col: 1,
        north: false,
        east: false,
        west: false,
        south: false,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 8,
        col: 2,
        north: false,
        east: false,
        west: false,
        south: false,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 8,
        col: 3,
        north: false,
        east: false,
        west: false,
        south: true,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 8,
        col: 4,
        north: true,
        east: false,
        west: false,
        south: true,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 8,
        col: 5,
        north: true,
        east: false,
        west: false,
        south: true,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 8,
        col: 6,
        north: true,
        east: false,
        west: false,
        south: true,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 8,
        col: 7,
        north: true,
        east: false,
        west: false,
        south: false,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 8,
        col: 8,
        north: false,
        east: true,
        west: false,
        south: true,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 8,
        col: 9,
        north: false,
        east: true,
        west: true,
        south: true,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
    ],
    [
      {
        row: 9,
        col: 0,
        north: false,
        east: true,
        west: true,
        south: true,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 9,
        col: 1,
        north: false,
        east: true,
        west: true,
        south: true,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 9,
        col: 2,
        north: false,
        east: true,
        west: true,
        south: true,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 9,
        col: 3,
        north: true,
        east: false,
        west: true,
        south: true,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 9,
        col: 4,
        north: true,
        east: false,
        west: false,
        south: true,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 9,
        col: 5,
        north: true,
        east: false,
        west: false,
        south: true,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 9,
        col: 6,
        north: true,
        east: false,
        west: false,
        south: true,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 9,
        col: 7,
        north: false,
        east: false,
        west: false,
        south: true,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 9,
        col: 8,
        north: true,
        east: false,
        west: false,
        south: true,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: false,
      },
      {
        row: 9,
        col: 9,
        north: true,
        east: true,
        west: false,
        south: true,
        isCurrentCell: false,
        isNextCell: false,
        isStart: false,
        isGoal: true,
      },
    ],
  ],
};

function start() {
  console.log("Javascript is running :)");
  console.log("Inital maze: ");
  console.log(maze);

  //drawMaze(maze);
  let solution = solveMaze(maze2);
  console.log(solution);
}

function solveMaze(maze) {
  drawMaze(maze);
  let solution = [];
  let visited = new Set();
  let branchList = [];
  let branch = [];

  const cellKey = (cell) => `${cell.col},${cell.row}`;
  visited.add("0,0");
  maze.maze[0][0].visited = true;

  let onBranch = false;

  let currentCell = maze.maze[maze.start.row][maze.start.col];
  let nextCell = null;

  const pickRandomNeighbor = () => {
    let newCell = Object.assign({}, currentCell);
    console.log("Picking random neighbor. CurrentCell: ");
    console.log(currentCell);
    const neighbors = getNeighbors(currentCell);

    switch (neighbors[Math.floor(Math.random() * neighbors.length)]) {
      case "east":
        newCell = maze.maze[newCell.row][newCell.col + 1];
        //newCell.col = newCell.col + 1;
        return newCell;
      case "west":
        newCell = maze.maze[newCell.row][newCell.col - 1];
        //newCell.col = newCell.col - 1;
        return newCell;
      case "south":
        newCell = maze.maze[newCell.row + 1][newCell.col];
        // newCell.row = newCell.row + 1;
        return newCell;
      case "north":
        newCell = maze.maze[newCell.row - 1][newCell.col];
        // newCell.row = newCell.row - 1;
        return newCell;
    }
  };
  const getNeighbors = (cell) => {
    let validDirections = [];

    if (!currentCell.north) {
      validDirections.push("north");
    }

    if (!currentCell.south) {
      validDirections.push("south");
    }

    if (!currentCell.west) {
      validDirections.push("west");
    }

    if (!currentCell.east) {
      validDirections.push("east");
    }

    return validDirections;
  };

  while (
    currentCell.col !== maze.goal.col ||
    currentCell.row !== maze.goal.row
  ) {
    nextCell = pickRandomNeighbor();

    let validNeighbors = getNeighbors(currentCell);

    const nextCellKey = cellKey(nextCell);

    if (!visited.has(nextCellKey)) {
      if (validNeighbors.length > 2) {
        let cells = [];
        validNeighbors.forEach((direction) => {
          switch (direction) {
            case "east":
              cells.push(maze.maze[currentCell.row][currentCell.col + 1]);
              break;
            case "west":
              cells.push(maze.maze[currentCell.row][currentCell.col - 1]);
              break;
            case "south":
              cells.push(maze.maze[currentCell.row + 1][currentCell.col]);
              break;
            case "north":
              cells.push(maze.maze[currentCell.row - 1][currentCell.col]);
              break;
          }
        });
        console.log("Neighbors of current cell");
        console.log(cells);

        if (getVisitedNeighborsCount(cells, visited) != 2) {
          if (onBranch) {
            branchList.push(branch);
            branch = [];
          }
          onBranch = true;
        }
      }

      if (currentCell.col == 0 && currentCell.row == 2) {
        console.log("here");
      }

      function getVisitedNeighborsCount(array, set) {
        let visited = 0;
        array.forEach((cell) => {
          if (set.has(`${cell.col},${cell.row}`)) {
            visited++;
          }
        });
        return visited;
      }

      if (nextCell.col > currentCell.col) {
        console.log("Going east");
        solution.push(nextCell);
        visited.add(nextCellKey);
        maze.maze[nextCell.row][nextCell.col].visited = true;
        if (onBranch) {
          branch.push(nextCell);
        }
      }

      if (nextCell.col < currentCell.col) {
        console.log("Going west");
        solution.push(nextCell);
        visited.add(nextCellKey);
        maze.maze[nextCell.row][nextCell.col].visited = true;
        if (onBranch) {
          branch.push(nextCell);
        }
      }

      if (nextCell.row < currentCell.row) {
        console.log("Going north");
        solution.push(nextCell);
        visited.add(nextCellKey);
        maze.maze[nextCell.row][nextCell.col].visited = true;
        if (onBranch) {
          branch.push(nextCell);
        }
      }
      if (nextCell.row > currentCell.row) {
        console.log("Going south");
        solution.push(nextCell);
        visited.add(nextCellKey);
        maze.maze[nextCell.row][nextCell.col].visited = true;
        if (onBranch) {
          branch.push(nextCell);
        }
      }

      console.log("End of if !visited statement. Next Cell:");
      console.log(nextCell);

      currentCell = nextCell;
    }

    if (validNeighbors.length == 1) {

        if (branchList.length == 0){
            branchList.push(branch)
        }

      for (let i = 0; i < solution.length; i++) {
        if (branch.includes(solution[i])) {
          let temp = solution[i];
          maze.maze[solution[i].row][solution[i].col].visited = false;
          solution.splice(i, 1);
          i--;
        }
      }

      if (branchList.length >= 1) {
        branch = branchList[branchList.length - 1]
        branchList.pop();
        console.log("branchList:");
        console.log(branchList);
      } else {
        branch = [];
        currentCell = solution[solution.length - 1];
        onBranch = false;
        console.log("branchList:");
        console.log(branchList);
      }
    }

    drawMaze(maze);
  }
  console.log("While loop finished");
  return solution;
}

function drawMaze(maze) {
  const mazeContainer = document.getElementById("maze-container");
  mazeContainer.innerHTML = "";

  const colSize = maze.cols;
  const rowSize = maze.rows;

  for (let i = 0; i < rowSize; i++) {
    const row = document.createElement("row");
    row.classList.add("row");
    mazeContainer.appendChild(row);

    for (let j = 0; j < colSize; j++) {
      const cell = document.createElement("cell");
      cell.classList.add("cell");

      if (maze.maze[i][j].visited) {
        cell.classList.add("visited");
      }

      if (maze.maze[i][j].north) {
        cell.classList.add("up");
      }

      if (maze.maze[i][j].south) {
        cell.classList.add("down");
      }

      if (maze.maze[i][j].east) {
        cell.classList.add("right");
      }

      if (maze.maze[i][j].west) {
        cell.classList.add("left");
      }
      row.appendChild(cell);
    }
  }
}

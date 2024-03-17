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
      { row: 0, col: 0, north: true, east: false, west: true, south: true },
      { row: 0, col: 1, north: true, east: true, west: false, south: false },
      { row: 0, col: 2, north: true, east: false, west: true, south: false },
      { row: 0, col: 3, north: true, east: true, west: false, south: false },
      { row: 0, col: 4, north: true, east: false, west: true, south: true },
      { row: 0, col: 5, north: true, east: false, west: false, south: false },
      { row: 0, col: 6, north: true, east: true, west: false, south: false },
    ],
    [
      { row: 1, col: 0, north: true, east: true, west: true, south: false },
      { row: 1, col: 1, north: false, east: false, west: true, south: true },
      { row: 1, col: 2, north: false, east: true, west: false, south: true },
      { row: 1, col: 3, north: false, east: true, west: true, south: false },
      { row: 1, col: 4, north: true, east: false, west: true, south: false },
      { row: 1, col: 5, north: false, east: true, west: false, south: true },
      { row: 1, col: 6, north: false, east: true, west: true, south: false },
    ],
    [
      { row: 2, col: 0, north: false, east: false, west: true, south: false },
      { row: 2, col: 1, north: true, east: false, west: false, south: true },
      { row: 2, col: 2, north: true, east: false, west: false, south: true },
      { row: 2, col: 3, north: false, east: true, west: false, south: true },
      { row: 2, col: 4, north: false, east: true, west: true, south: false },
      { row: 2, col: 5, north: true, east: false, west: true, south: false },
      { row: 2, col: 6, north: false, east: true, west: false, south: true },
    ],
    [
      { row: 3, col: 0, north: false, east: false, west: true, south: true },
      { row: 3, col: 1, north: true, east: true, west: false, south: false },
      { row: 3, col: 2, north: true, east: false, west: true, south: false },
      { row: 3, col: 3, north: true, east: false, west: false, south: true },
      { row: 3, col: 4, north: false, east: true, west: false, south: true },
      { row: 3, col: 5, north: false, east: true, west: true, south: false },
      { row: 3, col: 6, north: true, east: true, west: true, south: false },
    ],
    [
      { row: 4, col: 0, north: true, east: false, west: true, south: false },
      { row: 4, col: 1, north: false, east: true, west: false, south: true },
      { row: 4, col: 2, north: false, east: false, west: true, south: true },
      { row: 4, col: 3, north: true, east: true, west: false, south: false },
      { row: 4, col: 4, north: true, east: true, west: true, south: false },
      { row: 4, col: 5, north: false, east: true, west: true, south: false },
      { row: 4, col: 6, north: false, east: true, west: true, south: false },
    ],
    [
      { row: 5, col: 0, north: false, east: false, west: true, south: true },
      { row: 5, col: 1, north: true, east: false, west: false, south: true },
      { row: 5, col: 2, north: true, east: false, west: false, south: true },
      { row: 5, col: 3, north: false, east: true, west: false, south: true },
      { row: 5, col: 4, north: false, east: false, west: true, south: true },
      { row: 5, col: 5, north: false, east: false, west: false, south: true },
      { row: 5, col: 6, north: false, east: true, west: false, south: true },
    ],
  ],
};

function start() {
  console.log("Javascript is running :)");

  drawMaze(maze);
  let solution = solveMaze(maze);
  console.log(solution);
}

function solveMaze(maze) {
  let solution = [];
  let visited = new Set();
  let branch = [];

  let onBranch = false;

  let currentCell = maze.maze[maze.start.col][maze.start.row];
  let nextCell = null;

  const pickRandomNeighbor = () => {
    let newCell = Object.assign({}, currentCell);

    console.log(currentCell);
    const neighbors = getNeighbors(currentCell);

    switch (neighbors[Math.floor(Math.random() * neighbors.length)]) {
      case "east":
        newCell.col = newCell.col + 1;
        return newCell;
      case "west":
        newCell.col = newCell.col - 1;
        return newCell;
      case "south":
        newCell.row = newCell.row + 1;
        return newCell;
      case "north":
        newCell.row = newCell.row - 1;
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

  while (currentCell !== maze.goal) {
    nextCell = pickRandomNeighbor();

    let validNeighbors = getNeighbors(currentCell);

    if (validNeighbors.length > 1) {
      onBranch = true;
    }

    const cellKey = (cell) => `${cell.col},${cell.row}`;
    const nextCellKey = cellKey(nextCell);

    if (!visited.has(nextCellKey)) {
      if (nextCell.col > currentCell.col) {
        console.log("Going east");
        solution.push(nextCell);
        visited.add(nextCellKey);
        if (onBranch) {
          branch.push(nextCell);
        }
      }

      if (nextCell.col < currentCell.col) {
        console.log("Going west");
        solution.push(nextCell);
        visited.add(nextCellKey);
        if (onBranch) {
          branch.push(nextCell);
        }
      }

      if (nextCell.row < currentCell.row) {
        console.log("Going north");
        solution.push(nextCell);
        visited.add(nextCellKey);
        if (onBranch) {
          branch.push(nextCell);
        }
      }
      if (nextCell.row > currentCell.row) {
        console.log("Going south");
        solution.push(nextCell);
        visited.add(nextCellKey);
        if (onBranch) {
          branch.push(nextCell);
        }
      }
    } else {
      for (let i = 0; i < solution.length; i++) {
        if (branch.includes(solution[i])) {
          solution.splice(i, 1);
          i--;
        }
      }

      branch = [];
      currentCell = solution[solution.length - 1];
      onBranch = false;
    }

    console.log(nextCell);

    currentCell = nextCell;
  }
  return solution;
}

function drawMaze(maze) {
  const mazeContainer = document.getElementById("maze-container");
  mazeContainer.innerHTML = "";

  const colSize = maze.cols - 1; //Might have to remove the "- 1" after implementing the feature in MazeGenerator
  const rowSize = maze.rows;

  for (let i = 0; i < colSize; i++) {
    const row = document.createElement("row");
    row.classList.add("row");
    mazeContainer.appendChild(row);

    for (let j = 0; j < rowSize; j++) {
      const cell = document.createElement("cell");
      cell.classList.add("cell");

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

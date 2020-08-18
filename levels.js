import Brick from "/src/brick";
import multiBrick from "/src/multiBrick";
import extendBrick from "/src/extendBrick";

export function buildLevel(game, level) {
  let bricks = [];

  level.forEach((row, rowIndex) => {
    row.forEach((brick, brickIndex) => {
      if (brick === 1) {
        let position = {
          x: 80 * brickIndex,
          y: 75 + 24 * rowIndex
        };
        bricks.push(new Brick(game, position));
      }
      if (brick === 2) {
        let position = {
          x: 80 * brickIndex,
          y: 75 + 24 * rowIndex
        };
        bricks.push(new multiBrick(game, position));
      }
      if (brick === 3) {
        let position = {
          x: 80 * brickIndex,
          y: 75 + 24 * rowIndex
        };
        bricks.push(new extendBrick(game, position));
      }
    });
  });
  return bricks;
}

export const level1 = [
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0]
  //[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  //[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  //[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

export const level2 = [[2, 1, 2, 1, 2, 1, 2, 1, 2, 1]];

export const level3 = [[3, 1, 3, 1, 3, 1, 3, 1, 3, 1]];

export const level4 = [
  [2, 1, 2, 1, 2, 1, 2, 1, 2, 1],
  [3, 1, 3, 1, 3, 1, 3, 1, 3, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

export const level5 = [
  [0, 0, 0, 0, 3, 3, 3, 0, 0, 0]
  //[3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
];

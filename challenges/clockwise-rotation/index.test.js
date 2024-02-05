const rotateClockwise = require("./index");

test("Should return [[1]]", () => {
  // toEqual checks for deep equality
  expect(rotateClockwise([[1]])).toEqual([[1]]);
});

test("Should return [[3, 1],[4, 2]]", () => {
  expect(
    rotateClockwise([
      [1, 2],
      [3, 4],
    ])
  ).toEqual([
    [3, 1],
    [4, 2],
  ]);
});

test("Should return [[7, 4, 1],[8, 5, 2],[9, 6, 3]]", () => {
  expect(
    rotateClockwise([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ])
  ).toEqual([
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3],
  ]);
});

test("Should return [[13, 9, 5, 1],[14, 10, 6, 2],[15, 11, 7, 3], [16, 12, 8, 4]]", () => {
  expect(
    rotateClockwise([
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ])
  ).toEqual([
    [13, 9, 5, 1],
    [14, 10, 6, 2],
    [15, 11, 7, 3],
    [16, 12, 8, 4],
  ]);
});

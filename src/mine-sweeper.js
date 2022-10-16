const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 const minesweeper = matrix => matrix.map((row, rowIndex) => row.map((column, columnIndex) => {
  let score = 0;
  if (rowIndex > 0) {
      if (columnIndex > 0 && matrix[rowIndex - 1][columnIndex - 1]) score++;
      if (matrix[rowIndex - 1][columnIndex]) score++;
      if (columnIndex < matrix[rowIndex].length && matrix[rowIndex - 1][columnIndex + 1]) score++;
  }
  if (rowIndex < matrix.length - 1) {
      if (columnIndex > 0 && matrix[rowIndex + 1][columnIndex - 1]) score++;
      if (matrix[rowIndex + 1][columnIndex]) score++;
      if (columnIndex < matrix[rowIndex].length && matrix[rowIndex + 1][columnIndex + 1]) score++;
  }
  if (columnIndex > 0 && matrix[rowIndex][columnIndex - 1]) score++;
  if (columnIndex < matrix[rowIndex].length - 1 && matrix[rowIndex][columnIndex + 1]) score++;
  return score;
}));

module.exports = {
  minesweeper,
};

//  [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
// Spiral Order Matrix II

const SpiralOrderMatrix = (matrix) => {
  const output = [];
  let left = 0,
    right = matrix[0].length,
    top = 0,
    bottom = matrix.length;
  while (left < right && top < bottom) {
    for (let i = left; i < right; i++) output.push(matrix[left][i]);
    top++;

    for (let i = top; i < bottom; i++) output.push(matrix[i][right - 1]);
    right--;

    if (!(left < right && top < bottom)) return output;

    for (let i = right - 1; i >= left; i--) output.push(matrix[bottom - 1][i]);
    bottom--;

    for (let i = bottom - 1; i >= top; i--) output.push(matrix[i][left]);
    left++;
  }
  return output;
};
// TC: O[n x m]
// SC: O[n]

console.log(
  SpiralOrderMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

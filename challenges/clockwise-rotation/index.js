/**
 * @param {number[][]} matrix
 * @return {number[][]}
*/

function rotateClockwise (matrix) {
    const lastCol = matrix.length - 1;

    for (let i = 0; i < lastCol; i++) {
        for (let j = i; j < matrix[i].length - i - 1; j++) {
            matrix = swapTwoNums(matrix, i, j, j, lastCol - i);
            matrix = swapTwoNums(matrix, i, j, lastCol - i, lastCol - j);
            matrix = swapTwoNums(matrix, i, j, lastCol - j, i);
        }
    }
    return matrix;
}

// Helper Function
function swapTwoNums(matrix, xBegin, yBegin, xDestination, yDestination) {
    // Swap values using O{1) space
    matrix[xDestination][yDestination] += matrix[xBegin][yBegin];
    matrix[xBegin][yBegin] = matrix[xDestination][yDestination] - matrix[xBegin][yBegin];
    matrix[xDestination][yDestination] = matrix[xDestination][yDestination] - matrix[xBegin][yBegin];

    return matrix;
}

module.exports = rotateClockwise;
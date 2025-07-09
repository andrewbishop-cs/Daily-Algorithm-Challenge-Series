export default function matrixPathCounter(matrix: number[][]): number {
    
    const rows = matrix.length, cols = matrix[0].length
    const memo = Array.from({length: rows}, () => Array(cols).fill(1))

   let blocked = false
   for ( let r = 0; r < rows; r++ ) {
        if ( matrix[r][0] < 0 ) blocked = true
        if ( blocked ) memo[r][0] = 0
        else ( memo[r][0] = 1)
   } blocked = false
   for ( let c = 0; c < cols; c++ ) {
        if ( matrix[0][c] < 0 ) blocked = true
        if ( blocked ) memo[0][c] = 0
        else ( memo[0][c] = 1)
    }

    for ( let r = 1; r < rows; r++ ) {
        for ( let c = 1; c < cols; c++ ) {

            if ( matrix[r][c] >= 0) {
                memo[r][c] = memo[r - 1][c] + memo[r][c - 1]
            } else {
                memo[r][c] = 0
            }
        }
    }

    return memo[rows - 1] [cols - 1]
}
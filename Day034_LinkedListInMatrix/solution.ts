export function longestDiagonalNonAttendanceSequence(matrix: string[][]): number {
	// TODO: implement code here

    const n = matrix.length
    let longest = 0

    function scanDiagonal(i0: number, j0: number) {
        let cur = 0
        let i = i0, j = j0

        while ( i < n && j < n ) {
            if ( matrix[i][j] == "A" ) {
                cur++
                longest = Math.max(longest, cur)
            } else {
                cur = 0
            }
            i++
            j++
        }
    }

    for ( let i = 0; i < n; i++ ) {
        scanDiagonal(i, 0)
    }
    for ( let j = 1; j < n; j++ ) {
        scanDiagonal(0, j)
    }

	return longest;
}

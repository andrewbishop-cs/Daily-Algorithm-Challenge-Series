export function generateFrequencyDistribution(matrix: number[][]): Map<number, number> {
    // TODO: implement code here
    let statCounts: Map<number, number> = new Map();

    for ( let i = 0; i < matrix.length; i++ ) {
        for ( let j = 0; j < matrix[0].length; j++ ) {
            statCounts.set(matrix[i][j], (statCounts.get(matrix[i][j]) || 0) + 1)
        }
    }

    return statCounts;
}

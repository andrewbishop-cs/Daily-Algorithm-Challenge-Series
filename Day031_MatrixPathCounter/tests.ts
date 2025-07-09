import matrixPathCounter from './solution';

const testCases = [
    {
    matrix: [[5, -3, 1], [2, 0, 4], [-1, -2, 1]],
    expected: 1 
    },
    {
        matrix: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
    expected: 6
    },
    {
        matrix: [[-1, -2, -3], [-4, -5, -6], [-7, -8, -9]],
        expected: 0
        },
    {
        matrix: [[1]],
        expected: 1
        },
    {
        matrix: [[-1]],
        expected: 0
        },
    // All zeros (neutral, should be 1 path)
    {
        matrix: [[0,0],[0,0]],
        expected: 2
    },
    // Zeros and negatives (blocked path)
    {
        matrix: [[0,-1],[0,0]],
        expected: 1
    },
    // Start is zero
    {
        matrix: [[0,1],[1,1]],
        expected: 2
    },
    // End is zero
    {
        matrix: [[1,1],[1,0]],
        expected: 2
    },
    // Path only through zeros
    {
        matrix: [[0,0,0],[0,-1,0],[0,0,0]],
        expected: 2
    }
];
    
    let passedCount = 0;
    testCases.forEach((test, index) => {
        const actual = matrixPathCounter(test.matrix);
        console.log(`\nTest case ${index + 1}:`);
        console.log(`Matrix: ${JSON.stringify(test.matrix)}`);
        console.log(`Expected: ${test.expected}`);
        console.log(`Actual:   ${actual}`);
        if (actual == test.expected) {
            console.log(`\u2705 PASSED\n`);
            passedCount++;
        } else {
            console.error(`\u274C FAILED`);
        }
    });
    console.log(`\nSummary: ${passedCount} out of ${testCases.length} tests passed.`);
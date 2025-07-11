import { generateFrequencyDistribution } from './solution';

let testCases = [
	{ matrix: [[1, 2, 3], [3, 2, 1], [1, 1, 1]], expectedOutput: new Map([[1, 5], [2, 2], [3, 2]])},
	{ matrix: [[5, 5, 5], [10, 10, 10]], expectedOutput: new Map([[5, 3], [10, 3]])},
	{ matrix: [], expectedOutput: new Map()},
	{ matrix: [[1]], expectedOutput: new Map([[1, 1]])},
]

for (let i = 0; i < testCases.length; i++) {
	let result = generateFrequencyDistribution(testCases[i].matrix);
	
	// Compare Maps by converting to arrays and sorting for consistent comparison
	let resultEntries = Array.from(result.entries()).sort((a, b) => (a[0] as number) - (b[0] as number));
	let expectedEntries = Array.from(testCases[i].expectedOutput.entries()).sort((a, b) => (a[0] as number) - (b[0] as number));
	
	if (JSON.stringify(resultEntries) === JSON.stringify(expectedEntries)) {
		console.log('Test case ' + (i+1) + ': ✅');
	}
	else {
		console.log('Test case ' + (i+1) + ': ❌');
		console.log('Expected:', expectedEntries);
		console.log('Got:', resultEntries);
	}
}

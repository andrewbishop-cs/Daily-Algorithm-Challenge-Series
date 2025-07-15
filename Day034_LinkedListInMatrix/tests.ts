import { longestDiagonalNonAttendanceSequence } from './solution';

function runTests() {

	const testCase1 = longestDiagonalNonAttendanceSequence([
		['A', 'O', 'O', 'A'],
		['O', 'A', 'A', 'O'],
		['A', 'O', 'A', 'O'],
		['A', 'A', 'A', 'A']
	]);
	console.log((testCase1 === 4 ? '✅' : '❌') + ` Test 1
`);

	const testCase2 = longestDiagonalNonAttendanceSequence([
		['O', 'O', 'A'],
		['A', 'O', 'O'],
		['A', 'A', 'A']
	]);
	console.log((testCase2 === 2 ? '✅' : '❌') + ` Test 2
`);

	const testCase3 = longestDiagonalNonAttendanceSequence([
		['A', 'A'],
		['A', 'A']
	]);
	console.log((testCase3 === 2 ? '✅' : '❌') + ` Test 3
`);
	
	const testCase4 = longestDiagonalNonAttendanceSequence([
		['O']
	]);
	console.log((testCase4 === 0 ? '✅' : '❌') + ` Test 4
`);
}

runTests();

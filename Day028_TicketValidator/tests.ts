import validateTickets from './solution';

function assertEquals(a: boolean[][], b: boolean[][]): string {
	for (let i = 0; i < a.length; i += 1) {
		for (let j = 0; j < a[i].length; j += 1) {
			if (a[i][j] !== b[i][j]) {
				return '❌';
			}
		}
	}
	return '✅';
}

console.log('Batch 1 passes: ', assertEquals(validateTickets([['ABC', 'AEFD', 'ACBD', 'BAD']]), [[false, false, false, false]]));
console.log('Batch 2 passes: ', assertEquals(validateTickets([['ABCD']]), [[false]]));
console.log('Batch 3 passes: ', assertEquals(validateTickets([['BCD', 'DA']]), [[false, false]]));
console.log('Batch 4 passes: ', assertEquals(validateTickets([['BD', 'DA']]), [[false, false]]));
console.log('Batch 5 passes: ', assertEquals(validateTickets([['BEDA', 'AAADD', 'DABCDE']]), [[true, false, false]]));

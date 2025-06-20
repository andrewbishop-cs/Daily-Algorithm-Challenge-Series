"use strict";

import { getContentPath } from './solution';

function comparePaths(actual: string[][], expected: string[][]): { passed: boolean; message: string } {
	if (actual.length !== expected.length) {
		return {
			passed: false,
			message: `Expected ${expected.length} paths but got ${actual.length} paths`
		};
	}
	
	// Sort both arrays to ensure order doesn't matter
	const sortedActual = actual.map(path => path.join(' -> ')).sort();
	const sortedExpected = expected.map(path => path.join(' -> ')).sort();
	
	const mismatches = sortedActual.filter((path, i) => path !== sortedExpected[i]);
	if (mismatches.length > 0) {
		return {
			passed: false,
			message: `Path mismatch found:\nExpected paths:\n${sortedExpected.join('\n')}\n\nActual paths:\n${sortedActual.join('\n')}`
		};
	}
	
	return { passed: true, message: 'All paths match' };
}

console.log('🧪 Running Content Network Search Tests\n');

// Test 1: Multiple paths between nodes
console.log('Test 1: Multiple paths between nodes');
console.log('Description: Testing finding all possible paths from A to F in a network with multiple valid paths');
let contentNetwork = new Map();
contentNetwork.set('A', ['B', 'C']);
contentNetwork.set('B', ['A', 'D', 'E']);
contentNetwork.set('C', ['A', 'F']);
contentNetwork.set('D', ['B']);
contentNetwork.set('E', ['B', 'F']);
contentNetwork.set('F', ['C', 'E']);

let res = getContentPath(contentNetwork, 'A', 'F');
let test1 = comparePaths(res, [
	['A', 'B', 'E', 'F'],
	['A', 'C', 'F']
]);
console.log(test1.passed ? '✅ Test 1 passed' : `❌ Test 1 failed\n${test1.message}\n`);

// Test 2: No path exists
console.log('\nTest 2: No path exists');
console.log('Description: Testing behavior when no path exists between start and target nodes');
contentNetwork = new Map();
contentNetwork.set('A', ['B', 'C']);
contentNetwork.set('B', ['A']);
contentNetwork.set('C', ['A']);
res = getContentPath(contentNetwork, 'A', 'D');
let test2 = comparePaths(res, []);
console.log(test2.passed ? '✅ Test 2 passed' : `❌ Test 2 failed\n${test2.message}\n`);

// Test 3: Paths with cycles
console.log('\nTest 3: Paths with cycles');
console.log('Description: Testing finding paths in a network containing cycles');
contentNetwork = new Map();
contentNetwork.set('A', ['B', 'C']);
contentNetwork.set('B', ['A', 'D']);
contentNetwork.set('C', ['A', 'D']);
contentNetwork.set('D', ['B', 'C', 'E']);
contentNetwork.set('E', ['D']);
res = getContentPath(contentNetwork, 'A', 'E');
let test3 = comparePaths(res, [
	['A', 'B', 'D', 'E'],
	['A', 'C', 'D', 'E']
]);
console.log(test3.passed ? '✅ Test 3 passed' : `❌ Test 3 failed\n${test3.message}\n`);

// Test 4: Direct connection
console.log('\nTest 4: Direct connection');
console.log('Description: Testing when start and target nodes are directly connected');
contentNetwork = new Map();
contentNetwork.set('A', ['B']);
contentNetwork.set('B', ['A']);
res = getContentPath(contentNetwork, 'A', 'B');
let test4 = comparePaths(res, [['A', 'B']]);
console.log(test4.passed ? '✅ Test 4 passed' : `❌ Test 4 failed\n${test4.message}\n`);

// Summary
console.log('\n📊 Test Summary:');
console.log(`Total Tests: 4`);
console.log(`Passed: ${[test1, test2, test3, test4].filter(t => t.passed).length}`);
console.log(`Failed: ${[test1, test2, test3, test4].filter(t => !t.passed).length}`);

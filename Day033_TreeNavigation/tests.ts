import binTreeNavigation from './solution';
import { TreeNode } from "./starter"


let passed = true;

function arraysEqual(a: any[], b: any[]): boolean {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

const checkTest = (v1: any, v2: any, start: number, end: number) => {
    const testInfo = `Start: ${start}, End: ${end}`;
	if (Array.isArray(v1) && Array.isArray(v2)) {
		if (!arraysEqual(v1, v2)) {
			passed = false;
			console.log(`\u274C Test failed (${testInfo}): got ${JSON.stringify(v1)} but expected ${JSON.stringify(v2)}`);
		} else {
			console.log(`\u2705 Test passed (${testInfo})`)
		}
	} else {
		if (v1 !== v2) {
			passed = false;
			console.log(`\u274C Test failed (${testInfo}): got ${v1} but expected ${v2}`);
		} else {
			console.log(`\u2705 Test passed (${testInfo})`)
		}
	}
};

// Tests
/*
		1
	2		3
   4 5     6 7
*/

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

checkTest(binTreeNavigation(root, 1, 5), [1, 2, 5], 1, 5);
checkTest(binTreeNavigation(root, 6, 7), [6, 3, 7], 6, 7);
checkTest(binTreeNavigation(root, 8, 10), [], 8, 10);

// Additional test cases
// Start and end are the same node
checkTest(binTreeNavigation(root, 4, 4), [4], 4, 4);
// Start is ancestor of end
checkTest(binTreeNavigation(root, 2, 5), [2, 5], 2, 5);
// End is ancestor of start
checkTest(binTreeNavigation(root, 5, 2), [5, 2], 5, 2);
// Start and end are siblings
checkTest(binTreeNavigation(root, 4, 5), [4, 2, 5], 4, 5);
checkTest(binTreeNavigation(root, 6, 7), [6, 3, 7], 6, 7);
// Start is root, end is leaf
checkTest(binTreeNavigation(root, 1, 7), [1, 3, 7], 1, 7);
// Start is leaf, end is root
checkTest(binTreeNavigation(root, 7, 1), [7, 3, 1], 7, 1);
// Tree with only one node
const single = new TreeNode(42);
checkTest(binTreeNavigation(single, 42, 42), [42], 42, 42);
checkTest(binTreeNavigation(single, 42, 99), [], 42, 99);
checkTest(binTreeNavigation(single, 99, 42), [], 99, 42);

if (passed) {
	console.log('\u2705 All tests passed.')
} else {
	console.log('\u274C Some tests did not pass.')
}

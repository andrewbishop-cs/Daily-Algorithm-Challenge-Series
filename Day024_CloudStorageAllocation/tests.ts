import { CloudStorage } from './solution';

console.log('🧪 CloudStorage Allocation Tests\n');

// Helper to print pass/fail
function printResult(desc: string, result: boolean, expected: boolean) {
  const pass = result === expected;
  console.log(`${pass ? '✅' : '❌'} ${desc}`);
}

// Test 1: Simple allocation and extension
let storage = new CloudStorage();
let blocks = [1,2,3,4,5,6,7,8,9,10];
let plans = [{user: 'A', startAt: 2, endAt: 5}];
let extensions = [{user: 'A', extendBy: 3}];
printResult('Simple allocation', storage.allocateStorage(blocks, plans), true);
printResult('Simple extension', storage.extendPlan(extensions), true);

// Test 2: Extension fails due to overlap
extensions = [{user: 'A', extendBy: 7}];
printResult('Extension fails (overlap)', storage.extendPlan(extensions), false);

// Test 3: Overlapping initial plans
storage = new CloudStorage();
blocks = [1,2,3,4,5,6,7,8,9,10];
plans = [
  {user: 'A', startAt: 2, endAt: 5},
  {user: 'B', startAt: 4, endAt: 7}, // Overlaps with A
];
printResult('Overlapping initial plans', storage.allocateStorage(blocks, plans), false);

// Test 4: Non-overlapping multiple users
storage = new CloudStorage();
plans = [
  {user: 'A', startAt: 1, endAt: 3},
  {user: 'B', startAt: 4, endAt: 6},
  {user: 'C', startAt: 7, endAt: 10},
];
printResult('Non-overlapping multiple users', storage.allocateStorage(blocks, plans), true);

// Test 5: Multiple extensions for same user
extensions = [
  {user: 'A', extendBy: 1},
  {user: 'A', extendBy: 1},
];
printResult('Multiple extensions for same user', storage.extendPlan(extensions), false);

// Test 6: Extension fails due to another user
storage = new CloudStorage();
plans = [
  {user: 'A', startAt: 1, endAt: 3},
  {user: 'B', startAt: 4, endAt: 6},
];
blocks = [1,2,3,4,5,6];
printResult('Initial allocation', storage.allocateStorage(blocks, plans), true);
extensions = [{user: 'A', extendBy: 2}]; // Would overlap with B
printResult('Extension fails due to another user', storage.extendPlan(extensions), false);

// Test 7: Edge case - empty blocks
storage = new CloudStorage();
blocks = [];
plans = [{user: 'A', startAt: 1, endAt: 1}];
printResult('Empty blocks', storage.allocateStorage(blocks, plans), false);

// Test 8: Edge case - single block
storage = new CloudStorage();
blocks = [1];
plans = [{user: 'A', startAt: 1, endAt: 1}];
printResult('Single block allocation', storage.allocateStorage(blocks, plans), true);
extensions = [{user: 'A', extendBy: 1}];
printResult('Single block extension fails', storage.extendPlan(extensions), false);

// Test 9: Full allocation
storage = new CloudStorage();
blocks = [1,2,3,4,5];
plans = [
  {user: 'A', startAt: 1, endAt: 2},
  {user: 'B', startAt: 3, endAt: 5},
];
printResult('Full allocation', storage.allocateStorage(blocks, plans), true);
extensions = [{user: 'A', extendBy: 1}]; // Would overlap with B
printResult('Extension fails (full allocation)', storage.extendPlan(extensions), false);

// Test 10: Multiple users, one extension succeeds, one fails
storage = new CloudStorage();
blocks = [1,2,3,4,5,6,7,8,9,10];
plans = [
  {user: 'A', startAt: 1, endAt: 3},
  {user: 'B', startAt: 4, endAt: 6},
  {user: 'C', startAt: 7, endAt: 10},
];
printResult('Initial allocation (multi-user)', storage.allocateStorage(blocks, plans), true);
extensions = [
  {user: 'A', extendBy: 1}, // Should succeed
  {user: 'B', extendBy: 5}, // Should fail (would overlap with C)
];
printResult('One extension succeeds, one fails', storage.extendPlan(extensions), false);

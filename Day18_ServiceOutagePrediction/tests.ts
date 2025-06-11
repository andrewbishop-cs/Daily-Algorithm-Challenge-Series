import { predictFailures } from './solution';

// Test Case 1: Fully connected (triangle) – starting at 0 should reach [0,1,2]
const test1 = predictFailures(
  [
    [0, 2, 3],
    [2, 0, 1],
    [3, 1, 0],
  ],
  0
);
console.log(
  test1.sort((a: number, b: number) => a - b).toString() === [0, 1, 2].sort((a: number, b: number) => a - b).toString()
    ? '🎉'
    : '🔴',
  'got',
  test1
);

// Test Case 2: Fully connected (triangle) – starting at 1 should reach [0,1,2]
const test2 = predictFailures(
  [
    [0, 2, 3],
    [2, 0, 1],
    [3, 1, 0],
  ],
  1
);
console.log(
  test2.sort((a: number, b: number) => a - b).toString() === [0, 1, 2].sort((a: number, b: number) => a - b).toString()
    ? '🎉'
    : '🔴',
  'got',
  test2
);

// Test Case 3: No connections at all – each server is isolated; starting at 0 → [0]
const test3 = predictFailures(
  [
    [0, -1, -1],
    [-1, 0, -1],
    [-1, -1, 0],
  ],
  0
);
console.log(
  test3.sort((a: number, b: number) => a - b).toString() === [0].toString()
    ? '🎉'
    : '🔴',
  'got',
  test3
);

// Test Case 4: Partial connectivity – 0↔1 connected, 2 isolated; starting at 0 → [0,1]
const test4 = predictFailures(
  [
    [0, 1, -1],
    [1, 0, -1],
    [-1, -1, 0],
  ],
  0
);
console.log(
  test4.sort((a: number, b: number) => a - b).toString() === [0, 1].sort((a: number, b: number) => a - b).toString()
    ? '🎉'
    : '🔴',
  'got',
  test4
);

// Test Case 5: Partial connectivity – same graph, starting at the isolated server 2 → [2]
const test5 = predictFailures(
  [
    [0, 1, -1],
    [1, 0, -1],
    [-1, -1, 0],
  ],
  2
);
console.log(
  test5.sort((a: number, b: number) => a - b).toString() === [2].toString()
    ? '🎉'
    : '🔴',
  'got',
  test5
);

// Edge Case 1: Empty graph – no servers at all → []
const edgeCase1 = predictFailures([], 0);
console.log(
  edgeCase1.sort((a: number, b: number) => a - b).toString() === [].toString()
    ? '🎉'
    : '🔴',
  'got',
  edgeCase1
);

// Edge Case 2: Nonexistent serverId in a nonempty graph → []
const edgeCase2 = predictFailures(
  [
    [0, 2, 3],
    [2, 0, 1],
    [3, 1, 0],
  ],
  5
);
console.log(
  edgeCase2.sort((a: number, b: number) => a - b).toString() === [].toString()
    ? '🎉'
    : '🔴',
  'got',
  edgeCase2
);

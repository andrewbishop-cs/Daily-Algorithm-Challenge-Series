import { getReachableUsers } from './solution';

function testReachable(
  followers: Map<number, number[]>,
  origin: number,
  hops: number,
  expected: number[]
) {
  const result = getReachableUsers(followers, origin, hops)
    .sort((a, b) => a - b);
  const ok =
    result.length === expected.length &&
    result.every((v, i) => v === expected[i]);
  console.log(
    ok ? '✔' : '✘',
    `From ${origin} within ${hops} hop${hops !== 1 ? 's' : ''}:`,
    result, '| expected:', expected
  );
}

// 1) Sample network
const followers = new Map<number, number[]>([
  [1, [2, 3]],
  [2, [4]],
  [3, [4, 5]],
  [4, [6]],
  [5, []],
  [6, [2]],   // small cycle
]);

testReachable(followers, 1, 1, [2, 3]);
testReachable(followers, 1, 2, [2, 3, 4, 5]);
testReachable(followers, 1, 3, [2, 3, 4, 5, 6]);
testReachable(followers, 1, 4, [2, 3, 4, 5, 6]);

// 2) Disconnected user
followers.set(7, [8]);
followers.set(8, [9]);
testReachable(followers, 7, 2, [8, 9]);
testReachable(followers, 1, 5, [2, 3, 4, 5, 6]);

// 3) Self‑follower edge case
followers.set(10, [10]);
testReachable(followers, 10, 3, [10]);

// 4) Empty network
const emptyMap = new Map<number, number[]>();
testReachable(emptyMap, 42, 3, []);

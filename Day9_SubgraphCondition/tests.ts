import { doesConditionExist } from './solution';

let testCases = [
  { n: 5, edges: [[1, 2], [2, 3], [2, 4], [4, 5]], expected: true },
  { n: 4, edges: [[1, 2], [2, 3]], expected: false },
  { n: 3, edges: [[1, 3]], expected: false },
  { n: 3, edges: [[1, 2], [2, 3], [3, 1]], expected: true },
];

for (let testCase of testCases) {
  let result = doesConditionExist(testCase.n, testCase.edges);
  console.log(result === testCase.expected ? '✅ Passed' : '❌ Failed');
}

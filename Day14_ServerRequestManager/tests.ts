import { serverRequestManager } from './solution';

const testCases: Array<[number[], number, number[]]> = [
  [[1,2,3,4,5,6], 3, [1,2,3,5,7,9]],
  [[2,2,2,2,2,2], 3, [2,2,2,4,4,4]],
  [[6,5,4,3,2,1], 1, [6,11,15,18,20,21]],
  [[2,3,1,2], 2, [2,3,3,5]],
  [[], 2, []]
];


for (let i = 0; i < testCases.length; i++) {
  const [requests, maxSimultaneousRequests, expected] = testCases[i];
  const result = serverRequestManager(requests, maxSimultaneousRequests);
  console.log(`Test case ${i+1} - inputs: ${requests}, ${maxSimultaneousRequests}, expected: ${expected}, received: ${result}`);
  if (JSON.stringify(result) === JSON.stringify(expected)) {
    console.log('\u2705 Test case passed');
  } else {
    console.log('\u274C Test case failed');
  }
}

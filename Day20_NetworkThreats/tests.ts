// solution.test.ts
import { traceRoute } from './solution';

function runTests() {
  let pass = true;

  const testCases = [
    {
      adjList: [[1,2],[0,3],[0],[1,4],[-1]],
      start: 0,
      expected: [0,1,3,4]
    },
    {
      adjList: [[1,2],[0,-1],[0],[-1]],
      start: 0,
      expected: [0,1]
    },
    {
      adjList: [[-1]],
      start: 0,
      expected: [0]
    },
    {
      // no threats → full traversal
      adjList: [[1],[0,2],[1]],
      start: 0,
      expected: [0,1,2]
    },
    {
      // no neighbors at all
      adjList: [[]],
      start: 0,
      expected: [0]
    },
    {
      // threat on branch at 1 stops everything; 2→3 is NOT explored
      adjList: [[1,2],[-1],[3],[]],
      start: 0,
      expected: [0,1]
    }
  ];

  for (let i = 0; i < testCases.length; i++) {
    const { adjList, start, expected } = testCases[i];
    const result = traceRoute(adjList, start);
    if (arraysAreEqual(result, expected)) {
      console.log(`✅ Test ${i+1} passed`);
    } else {
      pass = false;
      console.log(
        `❌ Test ${i+1} failed: got [${result.join(',')}], expected [${expected.join(',')}]`
      );
    }
  }

  console.log(pass ? "All tests pass" : "Some tests fail");
}

function arraysAreEqual(a: number[], b: number[]): boolean {
  return a.length === b.length && a.every((v, i) => v === b[i]);
}

runTests();

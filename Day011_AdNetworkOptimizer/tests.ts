import { optimizeNetwork } from './solution';

// --------------------------
// Sample test graphs
// --------------------------

// graph1: 3 nodes, edges:
//   0 <-> 1 cost=3
//   0 <-> 2 cost=4
//   1 <-> 2 cost=5
// MST picks (0-1)=3, (0-2)=4 → total = 7
const graph1: number[][] = [
	[-1, 3, 4],
	[3, -1, 5],
	[4, 5, -1],
  ];
  
  // graph2: 4 nodes, edges:
  //   0 <-> 1 cost=2
  //   0 <-> 2 cost=3
  //   1 <-> 2 cost=4
  //   1 <-> 3 cost=5
  //   2 <-> 3 cost=6
  // MST picks (0-1)=2, (0-2)=3, (1-3)=5 → total = 10
  const graph2: number[][] = [
	[-1, 2, 3, -1],
	[2, -1, 4, 5],
	[3, 4, -1, 6],
	[-1, 5, 6, -1],
  ];
  
  // graph3: empty matrix (0 servers) → cannot connect anything → return -1
  const graph3: number[][] = [];
  
  // --------------------------
  // Test harness
  // --------------------------
  const testCases = [
	{ graph: graph1, expectedResult: 7 },
	{ graph: graph2, expectedResult: 10 },
	{ graph: graph3, expectedResult: -1 },
  ];
  
  console.log(
	testCases
	  .map((testCase) => {
		const actual = optimizeNetwork(testCase.graph);
		const passed = actual === testCase.expectedResult;
		return `Test case:
  Graph: ${JSON.stringify(testCase.graph)}
  Expected: ${testCase.expectedResult}
  Got: ${actual}
  Result: ${passed ? "✅ PASSED" : "❌ FAILED"}
  `;
	  })
	  .join("\n")
  );
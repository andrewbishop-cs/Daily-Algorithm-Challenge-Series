import { planJobExecution } from './solution';

// --- Test Harness ---

/**
 * Runs planJobExecution on the given inputs and logs result vs. expected.
 */
function testPlan(
  name: string,
  jobs: string[],
  deps: Array<[string, string]>,
  expected: string[]
) {
  const result = planJobExecution(jobs, deps);
  const pass = arraysEqual(result, expected);
  console.log(
    `[${name}] result = [${result.join(', ')}] | expected = [${expected.join(', ')}]`,
    pass ? '✅' : '❌'
  );
}

// Helper to compare two string arrays (order matters)
function arraysEqual(a: string[], b: string[]): boolean {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

// ---- Test Cases ----

// 1) Simple linear dependencies: A → B → C
testPlan(
  'Linear',
  ['A', 'B', 'C'],
  [['A','B'], ['B','C']],
  ['C','B','A'] // one valid order is C first, then B, then A
);

// 2) Multiple independent chains
testPlan(
  'Independent',
  ['X', 'Y', 'Z', 'W'],
  [['X','Y'], ['Z','W']],
  // any order that respects the pairs; e.g.:
  ['Y','W','X','Z']
);

// 3) Diamond shape: A → {B, C} → D
testPlan(
  'Diamond',
  ['A','B','C','D'],
  [['B','A'], ['C','A'], ['D','B'], ['D','C']],
  ['A','B','C','D']
);

// 4) No dependencies (any permutation is valid)
testPlan(
  'NoDeps',
  ['J1','J2','J3'],
  [],
  ['J1','J2','J3']
);

// 5) Simple cycle: A → B → A
testPlan(
  'Cycle',
  ['A','B'],
  [['A','B'], ['B','A']],
  [] // on cycle, should return empty
);

// 6) Complex graph with one cycle
testPlan(
  'ComplexCycle',
  ['A','B','C','D','E'],
  [['B','A'], ['C','B'], ['A','C'], ['D','C'], ['E','D']],
  []
);

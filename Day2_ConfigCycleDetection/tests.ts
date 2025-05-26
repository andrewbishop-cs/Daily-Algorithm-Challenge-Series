import { hasConfigCycle } from './solution';

function testConfigCycle(
  name: string,
  configIncludes: Record<string, string[]>,
  expected: boolean
) {
  const result = hasConfigCycle(configIncludes);
  console.log(
    `${result === expected ? '✔' : '✘'} [${name}] → ` +
    `got ${result}, expected ${expected}`
  );
}

// Test Case 1: Simple acyclic includes
const configsAcyclic = {
  A: ['B', 'C'],
  B: ['D'],
  C: [],
  D: []
};
testConfigCycle('Acyclic', configsAcyclic, false);

// Test Case 2: Direct self-include
const configsSelf = { X: ['X'] };
testConfigCycle('Self‑include', configsSelf, true);

// Test Case 3: Two-node cycle
const configsTwoCycle = {
  A: ['B'],
  B: ['A'],
  C: []
};
testConfigCycle('Two-node cycle', configsTwoCycle, true);

// Test Case 4: Multi-level cycle
const configsMultiCycle = {
  P: ['Q'],
  Q: ['R'],
  R: ['P'],
  S: ['T'],
  T: []
};
testConfigCycle('Multi-level cycle', configsMultiCycle, true);

// Test Case 5: Disconnected components, one cycle
const configsMixed = {
  M: ['N'],
  N: [],
  O: ['P'],
  P: ['Q'],
  Q: ['O'],  // cycle here
  R: []
};
testConfigCycle('Mixed components', configsMixed, true);

// Test Case 6: Empty mapping
const configsEmpty: Record<string, string[]> = {};
testConfigCycle('Empty', configsEmpty, false);
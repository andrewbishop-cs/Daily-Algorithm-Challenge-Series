import { getInstallationOrder } from './solution';

const testCases = [
  {
    input: new Map<string, string[]>([
      ['A', ['B', 'C']],
      ['B', ['D']],
      ['C', []],
      ['D', []],
    ]),
    output: ['C', 'D', 'B', 'A'],
    description: 'Simple dependency chain',
  },
  {
    input: new Map<string, string[]>([
      ['A', ['B']],
      ['B', ['A']],
    ]),
    output: expectError(),
    description: 'Simple cycle',
  },
  {
    input: new Map<string, string[]>([
      ['A', []],
    ]),
    output: ['A'],
    description: 'Single node',
  },
  {
    input: new Map<string, string[]>(),
    output: [],
    description: 'Empty graph',
  },
  {
    input: new Map<string, string[]>([
      ['A', ['B']],
      ['B', ['C']],
      ['C', ['D']],
      ['D', ['E']],
      ['E', []],
    ]),
    output: ['E', 'D', 'C', 'B', 'A'],
    description: 'Long chain',
  },
  {
    input: new Map<string, string[]>([
      ['A', ['B']],
      ['B', ['C']],
      ['C', ['A']],
    ]),
    output: expectError(),
    description: 'Three-node cycle',
  },
  {
    input: new Map<string, string[]>([
      ['A', ['B']],
      ['B', []],
      ['C', ['D']],
      ['D', []],
    ]),
    output: expectAnyOrder(['B', 'A', 'D', 'C']),
    description: 'Disconnected graph',
  },
  {
    input: new Map<string, string[]>([
      ['A', ['B', 'C']],
      ['B', ['D', 'E']],
      ['C', ['F']],
      ['D', []],
      ['E', []],
      ['F', []],
    ]),
    output: expectAnyOrder(['D', 'E', 'B', 'F', 'C', 'A']),
    description: 'Multiple valid orders',
  },
  {
    input: new Map<string, string[]>([
      ['A', ['B']],
      ['B', ['C']],
      ['C', ['D']],
      ['D', ['B']],
    ]),
    output: expectError(),
    description: 'Cycle in long chain',
  },
];

function expectAnyOrder(expected: string[]) {
  return { anyOrder: expected };
}

function expectError() {
  return { shouldThrow: true };
}

function arraysEqual(a: string[], b: string[]): boolean {
  if (a.length !== b.length) return false;
  const aSorted = [...a].sort();
  const bSorted = [...b].sort();
  return aSorted.every((v, i) => v === bSorted[i]);
}

console.log('🧪 Project Dependency Installation Order Tests\n');

testCases.forEach((testCase, index) => {
  let pass = false;
  const { input, output: expected } = testCase;

  if (expected && typeof expected === 'object' && 'shouldThrow' in expected) {
    try {
      getInstallationOrder(input);
      pass = false;
    } catch {
      pass = true;
    }
  } else if (expected && typeof expected === 'object' && 'anyOrder' in expected) {
    const result = getInstallationOrder(input);
    pass = Array.isArray(result) && arraysEqual(result, expected.anyOrder);
  } else {
    const result = getInstallationOrder(input);
    pass = Array.isArray(result) && Array.isArray(expected) && result.join(',') === expected.join(',');
  }

  console.log(
    `Test case ${index + 1}: ${pass ? '✅' : '❌'} - ${testCase.description}`
  );
  console.log('   Input:', Array.from(input.entries()));
  console.log('   Expected:', expected);
  try {
    console.log('   Got:', getInstallationOrder(input));
  } catch (err) {
    console.log('   Got Error');
  }
  console.log('');
});

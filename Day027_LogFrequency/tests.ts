import { topKFrequentEvents } from './solution';

const testCases = [
  {
    input: { events: ["login","logout","login","purchase","login","purchase"], k: 2 },
    expected: ["login","purchase"],
    description: 'Example 1: Two most frequent events from a mixed list'
  },
  {
    input: { events: ["error"], k: 1 },
    expected: ["error"],
    description: 'Example 2: Single event, k=1'
  },
  {
    input: { events: ["a","b","a","b","c"], k: 2 },
    expected: ["a","b"],
    description: 'Two most frequent from three events, two tied'
  },
  {
    input: { events: ["x","y","z"], k: 3 },
    expected: ["x","y","z"],
    description: 'All unique, k equals number of events'
  },
  {
    input: { events: [], k: 1 },
    expected: [],
    description: 'Empty input array'
  },
  {
    input: { events: ["repeat","repeat","repeat"], k: 1 },
    expected: ["repeat"],
    description: 'All events the same, k=1'
  },
  {
    input: { events: ["a","b","c","a","b","c"], k: 2 },
    expected: ["a","b","c"], // Any two of these are valid
    description: 'Three events, all tied, k=2 (any two of three are valid)'
  }
];

function arraysContainSameElements(arr1: string[], arr2: string[]): boolean {
  if (arr1.length !== arr2.length) return false;
  const count = (arr: string[]) => arr.reduce((acc, v) => (acc[v] = (acc[v] || 0) + 1, acc), {} as Record<string, number>);
  const c1 = count(arr1), c2 = count(arr2);
  return Object.keys(c1).every(key => c1[key] === c2[key]);
}

for (let i = 0; i < testCases.length; i++) {
  const { events, k } = testCases[i].input;
  const expected = testCases[i].expected;
  const result = topKFrequentEvents(events, k);
  let pass;
  // For cases where there are ties, allow any valid subset
  if (i === 6) {
    pass = result.length === 2 && result.every(e => ["a","b","c"].includes(e));
  } else {
    pass = arraysContainSameElements(result, expected);
  }
  if (pass) {
    console.log(`✅ Test ${i + 1} passed: ${testCases[i].description}`);
  } else {
    console.log(`❌ Test ${i + 1} failed: ${testCases[i].description}`);
    console.log(`   Input: events=${JSON.stringify(events)}, k=${k}`);
    console.log(`   Output: ${JSON.stringify(result)}`);
    console.log(`   Expected: ${JSON.stringify(expected)}`);
  }
}

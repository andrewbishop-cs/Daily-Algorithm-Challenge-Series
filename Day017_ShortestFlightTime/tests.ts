import findShortestFlightTime from './solution';

interface TestCase {
  flightNetwork: Map<string, Map<string, number>>;
  holdTimes: Map<string, number>;
  start: string;
  end: string;
  expected: number;
  description: string;
}

function createFlightNetwork(networkData: [string, [string, number][]][]): Map<string, Map<string, number>> {
  const network = new Map<string, Map<string, number>>();
  for (const [airport, connections] of networkData) {
    const connectionsMap = new Map<string, number>();
    for (const [dest, time] of connections) {
      connectionsMap.set(dest, time);
    }
    network.set(airport, connectionsMap);
  }
  return network;
}

function createHoldTimes(holdData: [string, number][]): Map<string, number> {
  return new Map(holdData);
}

const testCases: TestCase[] = [
  {
    description: "Basic network with multiple paths",
    flightNetwork: createFlightNetwork([
      ['A', [['B', 2], ['D', 1]]],
      ['B', [['C', 4]]],
      ['D', [['C', 2], ['E', 3]]],
      ['C', [['E', 2]]],
      ['E', []]
    ]),
    holdTimes: createHoldTimes([
      ['A', 0], ['B', 1], ['C', 1], ['D', 1], ['E', 0]
    ]),
    start: 'A',
    end: 'E',
    expected: 5   // A->D (1+1) + D->E (3+0) = 5
  },
  {
    description: "Network with longer hold times",
    flightNetwork: createFlightNetwork([
      ['A', [['B', 2], ['C', 5]]],
      ['B', [['C', 2]]],
      ['C', [['D', 3], ['E', 2]]],
      ['D', [['E', 2]]],
      ['E', []]
    ]),
    holdTimes: createHoldTimes([
      ['A', 1], ['B', 1], ['C', 1], ['D', 1], ['E', 0]
    ]),
    start: 'A',
    end: 'E',
    expected: 8   // A->B (2+1) + B->C (2+1) + C->E (2+0) = 8
  },
  {
    description: "Network with high hold times",
    flightNetwork: createFlightNetwork([
      ['A', [['B', 10]]],
      ['B', [['C', 20]]],
      ['C', [['D', 30], ['E', 30]]],
      ['D', [['E', 10]]],
      ['E', []]
    ]),
    holdTimes: createHoldTimes([
      ['A', 5], ['B', 5], ['C', 5], ['D', 5], ['E', 0]
    ]),
    start: 'A',
    end: 'E',
    expected: 70  // A->B (10+5) + B->C (20+5) + C->E (30+0) = 70
  },
  {
    description: "Direct flight (no connections)",
    flightNetwork: createFlightNetwork([
      ['A', [['B', 3]]],
      ['B', []]
    ]),
    holdTimes: createHoldTimes([
      ['A', 1], ['B', 0]
    ]),
    start: 'A',
    end: 'B',
    expected: 3   // A->B (3+0), no hold at origin or destination
  },
  {
    description: "Same start and end airport",
    flightNetwork: createFlightNetwork([
      ['A', [['B', 2]]],
      ['B', [['A', 2]]]
    ]),
    holdTimes: createHoldTimes([
      ['A', 0], ['B', 1]
    ]),
    start: 'A',
    end: 'A',
    expected: 0   // no travel needed
  },
  {
    description: "Complex network with multiple paths",
    flightNetwork: createFlightNetwork([
      ['A', [['B', 1], ['C', 4]]],
      ['B', [['C', 2], ['D', 5]]],
      ['C', [['D', 1], ['E', 3]]],
      ['D', [['E', 2]]],
      ['E', []]
    ]),
    holdTimes: createHoldTimes([
      ['A', 0], ['B', 1], ['C', 1], ['D', 1], ['E', 0]
    ]),
    start: 'A',
    end: 'E',
    expected: 8   // A->B (1+1) + B->C (2+1) + C->E (3+0) = 8
  }
];

function runTests(): void {
  console.log('🧪 Running Shortest Flight Time Tests\n');

  let passed = 0;
  testCases.forEach((tc, i) => {
    const got = findShortestFlightTime(tc.flightNetwork, tc.holdTimes, tc.start, tc.end);
    const ok = got === tc.expected;
    console.log(
      `Test ${i+1}: ${tc.description}\n` +
      `  Expected: ${tc.expected}, Got: ${got} ${ok ? '✅' : '❌'}\n`
    );
    if (ok) passed++;
  });
  console.log(`\n📊 ${passed}/${testCases.length} tests passed.`);
}

runTests();

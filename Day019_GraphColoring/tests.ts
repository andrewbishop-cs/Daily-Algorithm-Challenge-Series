import { validateCityAndColor } from './solution';

function logTest({graph, colors, expected, actual, description}: {graph: Map<string, string[]>, colors: Map<string, string>, expected: boolean, actual: boolean, description: string}) {
  console.log('---');
  console.log('Test:', description);
  console.log('Graph:', Array.from(graph.entries()));
  console.log('Colors:', Array.from(colors.entries()));
  console.log('Expected:', expected, '| Actual:', actual);
  if (actual === expected) {
    console.log('✅ Passed');
  } else {
    console.log('❌ Failed');
  }
}

// Triangle graph (3-cycle), all different colors (valid)
const graph1 = new Map([
  ['A', ['B', 'C']],
  ['B', ['A', 'C']],
  ['C', ['A', 'B']]
]);
const colors1 = new Map([
  ['A', 'Red'], ['B', 'Green'], ['C', 'Blue']
]);
logTest({graph: graph1, colors: colors1, expected: true, actual: validateCityAndColor(graph1, colors1), description: 'Triangle, all different colors'});

// Triangle graph, two same colors (invalid)
const colors2 = new Map([
  ['A', 'Red'], ['B', 'Red'], ['C', 'Blue']
]);
logTest({graph: graph1, colors: colors2, expected: false, actual: validateCityAndColor(graph1, colors2), description: 'Triangle, two same colors'});

// Line graph: A-B-C-D, valid coloring
const graph3 = new Map([
  ['A', ['B']],
  ['B', ['A', 'C']],
  ['C', ['B', 'D']],
  ['D', ['C']]
]);
const colors3 = new Map([
  ['A', 'Red'], ['B', 'Green'], ['C', 'Red'], ['D', 'Green']
]);
logTest({graph: graph3, colors: colors3, expected: true, actual: validateCityAndColor(graph3, colors3), description: 'Line graph, valid coloring'});

// Line graph: A-B-C-D, invalid coloring (A and B same)
const colors4 = new Map([
  ['A', 'Red'], ['B', 'Red'], ['C', 'Green'], ['D', 'Red']
]);
logTest({graph: graph3, colors: colors4, expected: false, actual: validateCityAndColor(graph3, colors4), description: 'Line graph, invalid coloring (A and B same)'});

// Star graph: Center E connected to A, B, C, D
const graph5 = new Map([
  ['E', ['A', 'B', 'C', 'D']],
  ['A', ['E']],
  ['B', ['E']],
  ['C', ['E']],
  ['D', ['E']]
]);
const colors5 = new Map([
  ['E', 'Yellow'], ['A', 'Red'], ['B', 'Red'], ['C', 'Red'], ['D', 'Red']
]);
logTest({graph: graph5, colors: colors5, expected: true, actual: validateCityAndColor(graph5, colors5), description: 'Star graph, valid coloring'});

// Star graph: Center E and A same color (invalid)
const colors6 = new Map([
  ['E', 'Red'], ['A', 'Red'], ['B', 'Green'], ['C', 'Blue'], ['D', 'Yellow']
]);
logTest({graph: graph5, colors: colors6, expected: false, actual: validateCityAndColor(graph5, colors6), description: 'Star graph, center and leaf same color'});

// Self-loop (invalid)
const graph6 = new Map([
  ['A', ['A']]
]);
const colors7 = new Map([
  ['A', 'Red']
]);
logTest({graph: graph6, colors: colors7, expected: false, actual: validateCityAndColor(graph6, colors7), description: 'Self-loop'});

// Disconnected graph (should not exist per problem, but test anyway)
const graph7 = new Map([
  ['A', ['B']],
  ['B', ['A']],
  ['C', ['D']],
  ['D', ['C']]
]);
const colors8 = new Map([
  ['A', 'Red'], ['B', 'Green'], ['C', 'Blue'], ['D', 'Yellow']
]);
logTest({graph: graph7, colors: colors8, expected: true, actual: validateCityAndColor(graph7, colors8), description: 'Disconnected graph, valid coloring'});
const colors9 = new Map([
  ['A', 'Red'], ['B', 'Red'], ['C', 'Blue'], ['D', 'Blue']
]);
logTest({graph: graph7, colors: colors9, expected: false, actual: validateCityAndColor(graph7, colors9), description: 'Disconnected graph, invalid coloring'});


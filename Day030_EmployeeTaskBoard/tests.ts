import availableTasks from './solution';

const testCases = [
  {
    graph: new Map([
      ['A', ['B', 'C']],
      ['B', ['D']],
      ['C', []],
      ['D', ['E', 'F']],
      ['E', ['G']],
      ['F', []],
      ['G', []]
    ]),
    completedTasks: ['A', 'B', 'C'],
    result: ['D']
  },
  {
    graph: new Map([
      ['A', ['B', 'C']],
      ['B', ['D']],
      ['C', []],
      ['D', ['E', 'F']],
      ['E', ['G']],
      ['F', []],
      ['G', []]
    ]),
    completedTasks: ['A', 'B', 'C', 'D'],
    result: ['E', 'F']
  },
  {
    graph: new Map([
      ['A', ['B', 'C']],
      ['B', ['D']],
      ['C', ['D']],
      ['D', ['E', 'F']],
      ['E', ['G']],
      ['F', []],
      ['G', []]
    ]),
    completedTasks: ['A', 'B', 'C'],
    result: ['D']
  },
  {
    graph: new Map([
      ['A', []],
      ['B', []],
      ['C', []],
      ['D', []],
      ['E', []],
      ['F', []],
      ['G', []]
    ]),
    completedTasks: [],
    result: ['A', 'B', 'C', 'D', 'E', 'F', 'G']
  }
];

testCases.forEach(({graph, completedTasks, result}, index) => {
  const calculatedResult = availableTasks(graph, completedTasks);
  const passed = JSON.stringify(calculatedResult.sort()) === JSON.stringify(result.sort());
  console.log(`\nTest case ${index + 1}:`);
  console.log(`  Graph:           ${JSON.stringify(Array.from(graph.entries()))}`);
  console.log(`  CompletedTasks:  ${JSON.stringify(completedTasks)}`);
  console.log(`  Output:          ${JSON.stringify(calculatedResult)}`);
  console.log(`  Expected:        ${JSON.stringify(result)}`);
  console.log(passed ? '✅ PASS' : '❌ FAIL');
});

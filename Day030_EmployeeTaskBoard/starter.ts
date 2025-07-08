/*
Imagine you are working on a project management application. Your company needs a feature
that allows the users to see WHICH TASKS can be performed based on the tasks that they 
already have completed. The tasks are arranged in a directed acyclic graph (DAG)
where each node is a task that can be performed and each edge signifies a 
prerequisite task that must be completed before moving on to the subsequent task.

Your task is to implement a function, availableTasks,

Your function should take in a graph represented as a Map<string, string[]>, as
well as a list representing tasks that are already completed and return a list of tasks
which can now be completed.

For example:

  const graph = new Map([
    ['A', ['B', 'C']],
    ['B', ['D']],
    ['C', []],
    ['D', ['E', 'F']],
    ['E', ['G']],
    ['F', []],
    ['G', []]
  ]);
  const completedTasks = ['A', 'B', 'C'];

  availableTasks(graph, completedTasks); // returns ['D']

*/

export default function availableTasks(graph: Map<string, string[]>, completedTasks: string[]): string[] {
  // TODO: implement code here
  return []
}

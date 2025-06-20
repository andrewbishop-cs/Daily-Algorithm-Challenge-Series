/*
  Daily Challenge: Day20 Network Threats

  As a cybersecurity engineer, you're often asked to design systems that can detect potential security 
  threats. Sometimes, this involves analyzing patterns of network traffic. For today's task, you're given 
  a model of a local network in form of a graph where nodes represent systems and edges represent connections 
  between systems.

  Write a function traceRoute that can simulate the traffic route by tracing connections between systems.
  You should implement a depth-first search method that:

    1. Visits nodes in a preorder DFS.
    2. As soon as any node’s adjacency list includes the threat marker `-1`, halts the *entire* traversal
       and returns the route taken from the start node to that threatened node.
    3. If no threat (`-1`) is ever encountered, returns the full preorder traversal of all reachable nodes.

  The graph is presented as an adjacency list where the index represents the node ID and each entry
  is a list of its connected node IDs.

  Example:
    const graph = [[1,2],[0,3],[0],[1,4],[-1]];
    traceRoute(graph, 0); // returns [0,1,3,4]
*/

export function traceRoute(adjList: number[][], start: number): number[] {
	// TODO: implement code here
	return []
}

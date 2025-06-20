// solution.ts
export function traceRoute(adjList: number[][], start: number): number[] {
	const visited = new Set<number>()
	const route: number[] = []
	const order: number[] = []
  
	// dfs returns true if a threat (-1) was found in this subtree
	function dfs(cur: number): boolean {
	  	visited.add(cur)
	 	order.push(cur)
	 	route.push(cur)
  
	 	if ((adjList[cur] || []).includes(-1)) {
			return true
	 	}
  
	 	for (const neigh of adjList[cur] || []) {
			if (neigh === -1 || visited.has(neigh)) continue
			if (dfs(neigh)) {
		  		return true
			}
	 	}
  
	 	route.pop()
	 	return false
	}
  
	const foundThreat = dfs(start)
	return foundThreat ? route : order
  }
  
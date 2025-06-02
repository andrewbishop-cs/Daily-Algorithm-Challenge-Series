
export function optimizeNetwork(g: number[][]): number {
    
	const n = g.length
	if ( n == 0 ) return -1

    const graph: Map<number, [number, number][]> = new Map()

	// build graph from adj matrix
	for ( let i = 0; i < n; i++ ) {
		graph.set(i, [])
	}

	for ( let i = 0; i < n; i++ ) {
		for ( let j = i + 1; j < n; j++ ) {
			const w = g[i][j]
			if ( w != -1 ) {
				graph.get(i)!.push([j, w])
				graph.get(j)!.push([i, w])
			}
		}
	}

	// finding minimum spanning tree

	const visited: Set<number> = new Set()
	let totalCost = 0

	const queue: [number, number][] = [[0, 0]]
	while ( queue.length ) {
		queue.sort((a, b) => a[1] - b[1])
		const [node, edgeCost] = queue.shift()!

		if ( visited.has(node) ) continue
		visited.add(node)
		totalCost += edgeCost

		for ( const [neighbour, w] of graph.get(node) || [] ) {
			if ( !visited.has(neighbour) ) {
				queue.push([neighbour, w])
			}
		}
	}

	if ( visited.size < n ) return -1
	return totalCost

}
  
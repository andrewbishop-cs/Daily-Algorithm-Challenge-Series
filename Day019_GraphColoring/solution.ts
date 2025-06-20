export function validateCityAndColor(graph: Map<string, string[]>, 
	colors: Map<string, string>): boolean {

	const visited: Set<string> = new Set()
	const [startKey] = graph.keys()
	const queue: string[] = [startKey]

	while ( queue.length ) {

		const cur = queue.shift()!
		if ( visited.has(cur) ) continue

		visited.add(cur)
		for ( let neighbour of graph.get(cur) || [] ) {
			if ( colors.get(cur) != colors.get(neighbour) ) {
				if ( !visited.has(neighbour) ) queue.push(neighbour)
			} else {
				return false
			}
		}
	}

	return true
}


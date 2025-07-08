export default function availableTasks(graph: Map<string, string[]>, completedTasks: string[]): string[] {
	
	const completed = new Set(completedTasks)
	const prereqs = new Map<string, string[]>()

	for ( const [task, deps] of graph.entries() ) {
		if ( !prereqs.has(task) ) prereqs.set(task, [])
		
		for ( const child of deps ) {
			if ( !prereqs.has(child) ) prereqs.set(child, [])
				prereqs.get(child)!.push(task)
		}
	}

	const available: string[] = []
	for ( const [task, deps] of prereqs.entries() ) {
		if ( completed.has(task) ) continue
		if ( deps.every(d => completed.has(d))) available.push(task)
	}

	return available
	
}
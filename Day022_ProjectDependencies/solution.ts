export function getInstallationOrder(dependencies: Map<string, string[]>): string[] {
	
    if ( !dependencies.size ) return []

    const inDegrees: Map<string, number> = new Map()
    for ( const key of dependencies.keys() ) inDegrees.set(key, 0)
    const dirGraph: Map<string, string[]> = new Map()

    for ( const [node, deps] of dependencies ) {
        inDegrees.set(node, deps.length)
        for ( const dep of deps ) {
            if ( !dirGraph.has(dep) ) dirGraph.set(dep, [])
            dirGraph.get(dep)!.push(node)
        }
    }

    const queue: string[] = []
    for ( const [node, degs] of inDegrees ) {
        if ( degs == 0 ) queue.push(node)
    }
    if ( !queue.length ) throw new Error('circular dependency detected');

    const order: string[] = []
    while ( queue.length ) {
        const cur = queue.shift()!
        order.push(cur)

        for ( const neighbour of dirGraph.get(cur) || [] ) {
            inDegrees.set(neighbour, inDegrees.get(neighbour)! - 1)
            if ( inDegrees.get(neighbour) == 0 ) queue.push(neighbour)
        }
    }

    if ( order.length == dependencies.size ) return order
    throw new Error('circular dependency detected');
	
}

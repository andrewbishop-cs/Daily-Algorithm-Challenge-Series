export const predictFailures = (serverGraph: number[][], serverId: number): number[] => {

    let n = serverGraph.length
    if ( serverId < 0 || serverId >= n ) return []

    const graph: Map<number, number[]> = new Map()
    for ( let i = 0; i < n; i++ ) {
        for ( let j = i; j < n; j++ ) {
            if ( i != j && serverGraph[i][j] != -1 ) {
                if ( !graph.has(i) ) graph.set(i, [])
                if ( !graph.has(j) ) graph.set(j, [])

                graph.get(i)!.push(j)
                graph.get(j)!.push(i)
            }
        }
    }

    const visited: Set<number> = new Set()
    function dfs(cur: number) {
        if ( visited.has(cur) ) return
        visited.add(cur)
        for ( const neighbour of graph.get(cur) || [] ) {
            if ( !visited.has(neighbour) ) {
                visited.add(neighbour)
                dfs(neighbour)
            }
        }
    }

    dfs(serverId)
    
    return [...visited];
  };
  
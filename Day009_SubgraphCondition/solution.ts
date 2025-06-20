export function doesConditionExist(n: number, edges: number[][]): boolean {
    
    if ( edges.length < n - 1 ) return false
  
    const graph: Map<number, number[]> = new Map()
    for ( let [a, b] of edges ) {
      graph.set(a, (graph.get(a) || []).concat(b))
    }
  
    const queue = [1]
    const visisted: Set<number> = new Set()
    while ( queue.length ) {
      const cur = queue.shift()!
      visisted.add(cur)
      for ( let neighbour of graph.get(cur) || []) {
        if ( !visisted.has(neighbour) ) {
          queue.push(neighbour)
        }
      }
  
    }
  
    return (visisted.size == n)
  }
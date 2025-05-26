export function planJobExecution(
    jobs: string[],
    dependencies: Array<[string, string]>
  ): string[] {
  
    const indegrees: Map<string, number> = new Map();
    const graph: Map<string, string[]> = new Map();
  
    // seed maps
    for (const job of jobs) {
      indegrees.set(job, 0)
      graph.set(job, [])
    }
  
    // build adj graph
    for ( const [succ, pre] of dependencies ) {
      
      indegrees.set(succ, (indegrees.get(succ) || 0) + 1)
      const toAdd = graph.get(pre) || []
      toAdd.push(succ)
      graph.set(pre, toAdd)
  
    }
  
    // console.log("indegrees" + Array.from(indegrees.entries()))
  
    const queue: string[] = []
    for ( const [job, indegs] of indegrees.entries())  {
      if (indegs == 0) queue.push(job)
    }
  
    if (!queue.length) return [] // no starting point
  
    const order = []
    while (queue.length) {
      const cur = queue.shift()!
      order.push(cur)
  
      for ( const succ of graph.get(cur) || [] ) {
        indegrees.set(succ, indegrees.get(succ)! - 1)
        if ( indegrees.get(succ) == 0 ) queue.push(succ)
      }
  
    }
  
    if (order.length != jobs.length) return []
    return order
  
  }
  
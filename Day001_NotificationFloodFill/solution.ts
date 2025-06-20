export function getReachableUsers(
    followers: Map<number, number[]>,
    originUser: number,
    maxHops: number
   ): number[] {
   
       // followers is already our adjacency matrix
       
       const queue: [number, number][] = [[originUser, 0]]
       const visited: Set<number> = new Set()
       while ( queue.length > 0) {
   
           const [cur, hops] = queue.shift()!
   
           for ( const f of followers.get(cur) || [] ) {
   
               if ( !visited.has(f) && hops < maxHops) {
                   visited.add(f)
                   queue.push([f, hops + 1])
               }
   
           } 
       }
   
    return Array.from(visited);
   }
   
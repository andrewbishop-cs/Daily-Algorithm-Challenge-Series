export function hasConfigCycle(
    configIncludes: Record<string, string[]>
   ): boolean {
    
     
     const doneProcessing: Set<string> = new Set()
     const onPath: Set<string> = new Set()
   
   
     function hasCycle(cur: string): boolean {
   
       if ( onPath.has(cur) ) return true
       if ( doneProcessing.has(cur) ) return false
   
       onPath.add(cur);
   
       for ( const dep of configIncludes[cur] || [] ) {
   
         if (hasCycle(dep)) return true;
   
       }
   
       onPath.delete(cur)
       doneProcessing.add(cur)
   
       return false
     }
   
     for ( const key of Object.keys(configIncludes)) {
   
       if (hasCycle(key)) return true
   
     }
   
   
   
    return false;
   }
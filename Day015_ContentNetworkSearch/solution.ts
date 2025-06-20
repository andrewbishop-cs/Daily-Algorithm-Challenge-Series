export function getContentPath(contentNetwork: Map<string, string[]>, startNode: string, searchTerm: string): string[][] {
    
    const result: string[][] = []
    
    function dfs(curNode: string, path: string[]): void {

        if ( curNode == searchTerm ) {
            result.push([...path])
            return
        }

        for ( let neighbour of contentNetwork.get(curNode) || [] ) {

            if ( !path.includes(neighbour) ) {
                
                dfs(neighbour, [...path].concat(neighbour))
            }

        } 

    }

    dfs(startNode, [startNode])

    return result
}

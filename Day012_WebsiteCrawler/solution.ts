import { getLinks } from './tests';

export function crawlWebsite(rootURL: string): string[] {
    
    const visited: Set<string> = new Set()

    function dfs(url: string) {

        if (!url.startsWith('http://') && !url.startsWith('https://')) return

        visited.add(url)

        for ( const link of getLinks(url) || [] ) {

            if (!visited.has(link)) {
                dfs(link)
            }
        }
    }

    dfs(rootURL)

    return Array.from(visited)
}


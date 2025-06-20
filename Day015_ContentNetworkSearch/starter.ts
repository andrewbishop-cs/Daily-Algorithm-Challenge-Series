/*

As a developer at a content management firm, you've been tasked with optimizing the content exploration 
feature for your team. The feature allows users to begin at a certain content piece and explore  
related pieces until they reach their desired depth. The content pieces are visualized as nodes,  
and their relevance as edges. 

The structure can be represented as an adjacency list where each node will point directly to its  
connected nodes. This content exploration tool will begin at a start node and perform a depth-first 
search for a search term - it will track all possible paths from the start node to the search term.

Function Signature: 

export function getContentPath(contentNetwork: Map<string, string[]>, startNode: string,  
               searchTerm: string): string[][]

Input:
contentNetwork : A Map object representing the content piece network. Each key will be a 
                  piece of content, represented as a string, and the value will be an array of  
                  strings representing the pieces directly connected to it.
startNode : a string, the piece of content from where the search should start.
searchTerm : a string, the piece of content that is the target of the search.

Output:
Return an array of paths, where each path is an array of strings representing a valid path 
from the startNode to the searchTerm. If no paths are found, return an empty array.
The paths should be returned in the order they are discovered during the DFS traversal.

Leetcode warmups:
- 1971. Find if Path Exists in Graph
- 797. All Paths From Source to Target

Example: 
Contents network:
A - [B, C]
B - [A, D, E]
C - [A, F]
D - [B]
E - [B, F]
F - [C, E]
Starting node: 'A'
Search term: 'F'
Output: [
    ['A', 'B', 'E', 'F'],
    ['A', 'C', 'F']
]
*/

export function getContentPath(contentNetwork: Map<string, string[]>, startNode: string, searchTerm: string): string[][] {
    return []
}

/*
As an engineer working on a web crawler, you need to parse different websites and
extract all the URLs on a given webpage. You soon realize that rather than just
extracting URLs, a better approach might be to model each webpage as a node in a
directed graph, with an edge from node A to B if A contains a link to B.

Your task is to implement a function, crawlWebsite(rootURL: string), which will
return a list of all reachable URLs from rootURL using Depth-First Search (DFS).

Note, you can use a mock function: getLinks(URL: string) to simulate fetching
URLs from a page. This function should return a list of URLs on the webpage.

Additionally:
1. Your crawler should not visit the same URL more than once.
2. Only consider http:// and https:// as valid schemas. URLs are case sensitive.
3. You can assume getLinks function will always return a list. The list can be empty.
4. You can assume the rootURL will always be reachable and will always be a well-formatted URL.
*/

export function crawlWebsite(rootURL: string) {
  // TODO: implement your code here
}


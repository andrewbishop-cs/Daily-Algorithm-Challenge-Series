/*
Imagine you're a software engineer at a major tech company in the cloud infrastructure department. 
You are responsible for maintenance of certain router nodes in the infrastructure.

For resilience and performance, you want to ensure that the nodes in your scope are balanced. 
You define 'balanced' as each node having no more (or less) than one connection difference with 
its neighbor. Additionally, if there are any one-direction connections, they must be reversed so all 
connections are bilateral.

Write a function `balanceNodes` that accepts a Map with node information and returns a 
Map with the balanced node information. The Map you're given will be in the format of: 
Map<string, string[]> where the key is the node name and the value is an array of connected nodes.

Example:

balanceNodes( new Map([['A', ['B', 'C']], ['B', ['A', 'C']], ['C', ['A']]]) );
Should return: new Map([['A', ['B', 'C']], ['B', ['A', 'C']], ['C', ['A', 'B']]])

Constraints:
- There will be no more than 10^5 nodes.
- Each node will have at least one connection.
*/

const balanceNodes = (nodes: Map<string, string[]>): Map<string, string[]> => {
 // TODO: implement code here
 return new Map();
};

export default balanceNodes;

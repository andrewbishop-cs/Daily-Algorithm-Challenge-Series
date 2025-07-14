/*
In today's challenge you are working on a Tree Navigation System for a software company.
Your job is to help create an algorithm that will allow the system to move from one node to another
in a binary tree. Each node can have at most two children.
The binary tree nodes have values and these values are unique.

LeetCode Warm-up:

1. Easy/Medium - https://leetcode.com/problems/invert-binary-tree/
2. Medium/Hard - https://leetcode.com/problems/maximum-binary-tree/

You should implement the function 'binTreeNavigation'. This function will take the root of the binary tree,
the start node value and the end node value. It should return the path in a list
from the start node to the end node (both inclusive). If there's no such path, return an empty array.
*/

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function find(root: TreeNode | null, target: number, path: number[]): number[] | null {

    if (!root) return null
    path.push(root.val)
    if ( root.val === target ) {
        return [...path]
    }

    let leftResult = find(root.left, target, path)
    if ( leftResult ) return leftResult

    let rightResult = find(root.right, target, path)
    if ( rightResult ) return rightResult

    path.pop()
    return null
}

function binTreeNavigation(root: TreeNode | null, start: number, end: number): number[] {

    const startPath = find(root, start, [])
    const endPath = find(root, end, [])

    console.log(startPath + " , " + endPath)
    if ( !startPath || !endPath ) return []

    let lca = 0
    while ( lca < startPath.length && lca < endPath.length && startPath[lca] == endPath[lca] ) lca++
    lca--

    const upPath = startPath.slice(lca).reverse()
    const downPath = endPath.slice(lca + 1)

    return upPath.concat(downPath)
}

export default binTreeNavigation;

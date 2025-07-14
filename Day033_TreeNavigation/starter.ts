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

export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}
function binTreeNavigation(root: TreeNode | null, start: number, end: number): number[] {
	// TODO: implement code here

	return []
}

export default binTreeNavigation;

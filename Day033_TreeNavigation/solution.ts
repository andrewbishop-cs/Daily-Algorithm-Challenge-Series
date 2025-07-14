import { TreeNode } from "./starter"

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

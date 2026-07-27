/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class TreeNode {
    constructor(val = 0, neighbors = []) {
        this.val = val
        this.neighbors = neighbors
    }
}

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) return null

        const oldToNew = new Map()

        const dfs = (curr) => {
            // prevents an inifinite loop
            // and returns copied nodes in the hashMap
            if (oldToNew.has(curr)) {
                return oldToNew.get(curr)
            }

            const copy = new TreeNode(curr.val)
            oldToNew.set(curr, copy)

            // console.log({curr, val: curr.val, copy})

            for (const n of curr.neighbors) {
                const copiedNeighbor = dfs(n)
                // copy: Node 2
                // copiedNeighbor: Node 1
                copy.neighbors.push(copiedNeighbor)
            }

            return copy
        }

        return dfs(node)
    }
}

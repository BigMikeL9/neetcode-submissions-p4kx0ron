/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) return null
        const hashMap = new Map()

        const dfs = (currNode) => {
            // base case
            // prevents us from creating copies of already copied nodes in the hashmap
            if (hashMap.has(currNode)) {
                return hashMap.get(currNode)
            }

            const copy = new Node(currNode.val)
            hashMap.set(currNode, copy)

            for (const n of currNode.neighbors) {
                const copiedN = dfs(n)
                copy.neighbors.push(copiedN)
            }

            return copy
        }

        return dfs(node)
    }
}

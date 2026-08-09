class TreeNode {
    val: number
    neighbors: TreeNode[]

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
    cloneGraph(node: TreeNode | null): TreeNode {
        if (!node) return null
        const hashMap = new Map()

        const dfs = (node: TreeNode) => {
            if (hashMap.has(node)) return hashMap.get(node)

            const copy = new TreeNode(node.val, [])
            hashMap.set(node, copy)

            for (const n of node.neighbors) {
                const copiedNieghbor = dfs(n)
                copy.neighbors.push(copiedNieghbor)
            }

            return copy
        }

        dfs(node)
        return hashMap.get(node)
    }
}

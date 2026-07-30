class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n: number, edges: number[][]): boolean {
        const adjList = new Map()
        const visiting = new Set()

        for (let i = 0; i < n; i++) {
            adjList.set(i, [])
        }

        for (const [u, v] of edges) {
            adjList.get(u).push(v)
            adjList.get(v).push(u)
        }

        console.log({adjList})

        // if we have cycle
        const dfs = (node: number, pre: number) => {
            // base case
            console.log({node, pre, neighbors: adjList.get(node)})
            if (visiting.has(node)) {
                return false
            }

            visiting.add(node)

            for (const n of adjList.get(node)) {
                if (n === pre) continue
                if(!dfs(n, node)) return false
            }

            return true
        }

        if (!dfs(0, -1)) return false

        console.log({visiting})

        return visiting.size === n
    }
}

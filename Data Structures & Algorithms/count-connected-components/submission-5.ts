class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n: number, edges: number[][]): number {
        const adjList = new Map()
        const visited = new Set()
        let res = 0

        // build adjacency list
        for (let i = 0; i < n; i++) {
            adjList.set(i, [])
        }

        for (const [a, b] of edges) {
            adjList.get(a).push(b)
            adjList.get(b).push(a)
        }

        const dfs = (node: number) => {
            if (visited.has(node)) return 

            visited.add(node)

            for (const neighbor of adjList.get(node)) {
                dfs(neighbor)
            }
        }

        for (let i = 0; i < n; i++) {
            if (visited.has(i)) continue
            res += 1
            dfs(i)
        }

        return res
    }
}

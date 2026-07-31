class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n: number, edges: number[][]): number {
        const hashMap = new Map()
        const visited = new Set()
        let res = 0

        for (let i = 0; i < n; i++) {
            hashMap.set(i, [])
        }

        for (const [u, v] of edges) {
            hashMap.get(u).push(v)
            hashMap.get(v).push(u)
        }

        const dfs = (node: number) => {
            if (visited.has(node)) return
            visited.add(node)
            for (const neigh of hashMap.get(node)) dfs(neigh)
        }

        for (let i = 0; i < n; i++) {
            console.log({i, visited})
            if (visited.has(i)) continue
            dfs(i)
            res += 1
        }

        return res
    }
}

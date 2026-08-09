class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n: number, edges: number[][]): number {
        const hashMap = new Map()
        const visiting = new Set()
        let res = 0

        // build adjaceny list
        for (let i = 0; i < n; i++) {
            hashMap.set(i, [])
        }

        for (const [a, b] of edges) {
            hashMap.get(a).push(b)
            hashMap.get(b).push(a)
        }

        console.log(hashMap)
        
        // dfs(0)
        // visiting = [0]
        // dfs()
        const dfs = (e: number) => {
            if (visiting.has(e)) return 
            visiting.add(e)
            for (const n of hashMap.get(e)) dfs(n)
        }

        for (let i = 0; i < n; i++) {
            if (visiting.has(i)) continue
            console.log({i, visiting, res})
            dfs(i)
            res += 1
        }
        
        return res
    }
}

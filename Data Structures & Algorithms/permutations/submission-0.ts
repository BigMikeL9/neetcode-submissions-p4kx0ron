class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums: number[]): number[][] {
        const res = []
        const subset = []
        const used = new Set()

        const dfs = () => {
            // base case 
            if (subset.length === nums.length) {
                res.push([...subset])
                return
            }

            for (const n of nums) {
                if (used.has(n)) continue
                
                // include in subset
                subset.push(n)
                used.add(n)

                // recursively get all combination using current num
                dfs()

                subset.pop()
                used.delete(n)
            }
        }

        dfs()
        return res
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums: number[]): number[][] {
        const res = []

        const dfs = (subset: number[], used: Set<number>) => {
            // base case
            if (subset.length === nums.length) {
                res.push([...subset])
                return
            }

            for (const n of nums) {
                if (used.has(n)) continue;

                // add current num
                subset.push(n)
                used.add(n)

                // recursively build subset
                dfs(subset, used)

                subset.pop()
                used.delete(n)
            }
        }
        
        dfs([], new Set())
        return res
    }
}

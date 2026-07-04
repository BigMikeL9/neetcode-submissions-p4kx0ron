class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates: number[], target: number): number[][] {
        const res = []
        candidates.sort()

        const dfs = (i: number, subset: number[], sum: number) => {
            // base case
            if (sum === target) {
                res.push([...subset])
                return
            }
            
            if (i >= candidates.length || sum > target) return

            // left
            subset.push(candidates[i])
            dfs(i + 1, subset, sum + candidates[i])

            // right
            // If this duplicate value is sitting next to a duplicate sibling, skip it.
            // Skip duplicate siblings. Allow duplicate descendants.
            subset.pop()
            while (i + 1 < candidates.length && candidates[i] === candidates[i + 1]) i++
            dfs(i + 1, subset, sum)
        }

        dfs(0, [], 0)
        return res
    }
}

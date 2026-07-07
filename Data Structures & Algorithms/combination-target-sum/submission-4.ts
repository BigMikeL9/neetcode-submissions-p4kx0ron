// we can create a recursive decision tree where each branch
// has two subtrees/decisions. The left subtree will keep adding the 
// 

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        let res = []

        const dfs = (i: number, subset: number[], sum: number) => {
            // base case 
            if (sum === target) {
                res.push([...subset])
                return
            }

            if (i >= nums.length || sum > target) return

            // left. keep including adding up same number
            subset.push(nums[i])
            dfs(i, subset, sum + nums[i])

            // right. add next num to sum
            subset.pop()
            dfs(i + 1, subset, sum)
        }

        dfs(0, [], 0)
        return res
    }
}

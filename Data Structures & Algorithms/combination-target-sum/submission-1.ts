
// We can use backtracking where we recursively traverse through a decision tree that checks every combination
// based on certain conditions. The base condition to add a subset to our reselt would be if the current sum
// is equal to the target. 
// If the current sum is greater then the target, we backtrack and try other combinations
// Time Complexity would be O(2^(T/M)) 
// 2^ because each recursive call branches into two decisions/nodes in the decision tree
// T/M is the height of the decision tree which is the Target / the smallest number in the nums array because
// if our target is 100 and or smallest num is 2, then we will have in worst case 50 nodes until our sum is equal to the 
// target. 
// Space Complexity is O(T/M) for the recursive call stack

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        const res = []

        const subset = []
        const dfs = (i: number, sum: number = 0) => {
            // base condition
            if (sum === target) {
                res.push([...subset])
                return
            }

            // return if we reach the end of nums or when sum > target
            if (i === nums.length || sum > target) return

            // left decision subtree (keep add curr num until we exceed or find target)
            subset.push(nums[i])
            dfs(i, sum + nums[i])

            // right subtree (backtrack if we exceed sum)
            subset.pop()
            dfs(i + 1, sum)
        }

        console.log(res)
        dfs(0, 0)
        return res
    }
}

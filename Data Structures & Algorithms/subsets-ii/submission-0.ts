// we can recursivly create a decision tree where every node has two branches that includes/excludes
// the current num. 
// To make sure we dont ahve duplciate subsets in the output we can first sort the nums arr
// then before traversing/creating the right branch we skip duplicaate siblings in the right branch.

// Time Complexity would be O(nlogn + n * 2^n) or simply O(n * 2^n) where n is the number of element in the nums arr
// Space Complexity would be O(2^n) for the recursive callstack

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums: number[]): number[][] {
        let res = []
        nums.sort((a, b) => a - b)

        const dfs = (i: number, subset: number[]) => {
            // base case
            if (i >= nums.length) {
                res.push([...subset]) // O(n)
                return
            }

            // left branch. include current num
            subset.push(nums[i])
            dfs(i + 1, subset)

            // right branch. exclude current num
            subset.pop()

            // skip duplicate nums
            while (i >= 0 && nums[i] === nums[i + 1]) i++
            dfs(i + 1, subset)
        }

        dfs(0, [])
        return res
    }
}

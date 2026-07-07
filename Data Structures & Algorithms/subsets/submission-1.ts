// we can build a recursive decision tree where we have to choices/nodes at every branch. 
// The left will include the current num, and the right will exclude it. 
// This will ensure that we have no duplicate subsets.
// Our base case to return from the current recursive call would be if the current index equal to the length of the nums arr

// Time Complexity would be O(n * 2^n). n - because we will be creating a copy of the current subset before add
// it to the output. 2^n because we have two choices at every branch
// Space Complexity would O(n) (NOT SURE WHY)

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        let res = []

        const dfs = (i: number, subset: number[]) => {
            // base case
            if (i === nums.length) {
                res.push([...subset]) // Time: O(n)
                return 
            }

            // left. include curr num
            // [1] 0
            // [1, 2] 1
            // [1, 2, 3] 2
            // [1, 2, 3] 3
            subset.push(nums[i])
            dfs(i + 1, subset)

            // right. exclude curr num
            // [1, 2] 3
            // [1] 2
            subset.pop()
            dfs(i + 1, subset)
        }

        dfs(0, [])
        return res
    }
}

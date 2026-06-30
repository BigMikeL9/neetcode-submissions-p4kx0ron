// We can use backtracking by checking for every combination possible using a decision tree 
// I will use recursive depth first search where I will travers through the left subtrees and then the right, 
// storing every possible subset in the process. 
// Time Complexity would be O(n * 2^n)
// Space Complexity would be linear O(n)
// where n is the number of every possible subset

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        const res = []

        const subset = []
        const dfs = (i: number) => {
            // base case: reached the end of the decision subtree
            if (i === nums.length) {
                res.push([...subset]) // copying the subset is linear time O(n)
                return
            }

            // traverse left (include nums[i])
            subset.push(nums[i])
            dfs(i + 1)

            // traverse right (exclude last entered nums[i] in the subset)
            // nums = [1,2,3]; i = 2; nums[i] = 3; subset = [1, 2, 3] -> reached end of left decision subtree ->
            // -> bubble back up -> traverse right -> pop last element
            // -> subset = [1, 2] -> dfs(2 + 1) -> base case is reached -> add subset to res and return recursive call
            subset.pop() 
            dfs(i + 1)
        }

        dfs(0)
        console.log(res)
        return res
    }
}

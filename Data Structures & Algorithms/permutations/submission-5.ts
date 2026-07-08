// we can recursivly build a decision tree where we add the current num to a subset and then backtrack 
// once we our subset is the same size as our nums array. 
// we can keep track if a num is used in the current subset by storing it in a hashset. We can do that because
// the nums arr contains uynique integers. 

// ** Once the recursive call finishes, we undo our previous choice by removing the last number from the subset and marking it as unused in the hash set. 
// ** This lets us try the other available numbers at the current level of the decision tree. 

// Our base case to include the subset in the a res output variable, would be if the subset length is equal to that 
// of the nums arr length.

// Time Complexity would be O(n * n!)
// Space Complexity would also be O(n * n!) for the recursive callstack


class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums: number[]): number[][] {
        let res = []
        let used = new Set()

        const dfs = (subset: number[]) => {
            // base case 
            if (subset.length === nums.length) {
                res.push([...subset])
                return
            }

            for (const n of nums) {
                if (used.has(n)) continue

                // include num in subset
                subset.push(n)
                used.add(n)

                dfs(subset)

                // backtrack
                subset.pop()
                used.delete(n)
            }
        }

        dfs([])
        return res
    }
}

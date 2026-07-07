// we can recursivley build a decision tree where we have two decision/branches after every node
// the left node would contain the current num at index i and the right node would exclude the num at index i
// base case to add a subset to our res would be if we reach the end of our nums array or when our subset sum 
// is equal to the target

// Time Complexity would be O(n * 2^n + nlogn) -> O(n * 2^n)
// Space Complexity would be O(2^n) for the recursive callstack


class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates: number[], target: number): number[][] {
        let res = []
        candidates.sort((a, b) => a - b) // ascending order

        const dfs = (i: number, subset: number[], sum: number, branch: 'LEFT' | 'RIGHT'| 'START') => {
            // base case
            if (sum === target) {
                res.push([...subset]) // O(n)
                return
            }

            // if we reach the bounds of the nums arr or sum exceeds target, return
            if (i > candidates.length || sum > target) return

            // left. include num at index i
            subset.push(candidates[i])
            // console.log('BEFORE', {branch, level: subset.length, num: candidates[i], i, subset, sum: sum + candidates[i]})
            dfs(i + 1, subset, sum + candidates[i], 'LEFT')

            // console.log('AFTER', {branch, level: subset.length, num: candidates[i], i, subset, sum})

            // right. exclude num at index i
            subset.pop()
            while (i + 1 < candidates.length && candidates[i] === candidates[i + 1]) i++
            dfs(i + 1, subset, sum, 'RIGHT')
        }

        dfs(0, [], 0, 'LEFT')
        return res
    }
}

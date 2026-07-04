class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const hashSet = new Set([...nums])
        let res = 0

        for (let i = 0; i < nums.length; i++) {
            let streak = 1

            // check if start of a seq
            // 2
            if (!hashSet.has(nums[i] - 1)) {
                let curr = nums[i]
                
                while (hashSet.has(curr + 1)) {
                    streak += 1
                    curr = curr + 1
                }
            }

            res = Math.max(res, streak)
        }

        return res
    }
}

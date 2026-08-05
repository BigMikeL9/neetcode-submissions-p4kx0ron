class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (nums.length <= 0) return 0
        const hashSet = new Set(nums)
        let res = 1

        for (const n of nums) {
            if (hashSet.has(n - 1)) continue

            let count = 1
            let curr = n
            while (hashSet.has(curr + 1)) {
                count++
                curr++
            }

            res = Math.max(res, count)
        }

        return res
    }
}

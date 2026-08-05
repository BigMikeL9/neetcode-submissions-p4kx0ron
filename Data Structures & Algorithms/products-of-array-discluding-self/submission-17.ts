class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const prefixes = new Array(nums.length).fill(1) // [1, 1, 2, 8]
        const suffixes = new Array(nums.length).fill(1) // [48, 24, 6, 1]
        const res = []

        let prefix = 1
        for (let i = 0; i < nums.length; i++) {
            prefixes[i] = prefix
            prefix *= nums[i]
        }

        let suffix = 1 // 48
        for (let i = nums.length - 1; i >= 0; i--) {
            suffixes[i] = suffix
            suffix *= nums[i]
        }

        console.log({suffixes, prefixes})
        for (let i = 0; i < nums.length; i++) {
            const prod = prefixes[i] * suffixes[i]
            res.push(prod)
        }

        return res
    }

    // Time: O(3n) -> O(n)
    // Space: O(2n) -> O(n) exluding the ouput
    // where n is the number of elements in the nums arr
}

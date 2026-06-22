class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        // [1, 2, 3, 4, 5]  k = 2
        // 5 - 2 = 3
        const sorted = nums.sort((a, b) => a - b);
        return sorted[nums.length - k]
    }
}

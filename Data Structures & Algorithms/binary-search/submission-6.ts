class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */

    // Since the array is sorted we can use Binary Search to find the index of the target
    // Time Complexity would be O(logn)
    // Space Complexity would be constant O(1)

    search(nums: number[], target: number): number {
        let l = 0;
        let r = nums.length - 1;

        while (l <= r) {
            const m = Math.floor(l + (r - l) / 2);

            if (nums[m] === target) return m

            if (nums[m] < target) l = m + 1
            else r = m - 1
        }

        return -1
    }
}

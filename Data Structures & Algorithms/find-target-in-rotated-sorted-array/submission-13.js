class Solution {
    // Even tho the array is rotated, it is still sorted. So we can divide it into two portions, 
    // find the sorted portion and check if the target exist in that portion. 
    // If it does, search it. If it doesn't search the other portion

    // Time Complexity is O(logn)
    // Space complexity is constant O(1)

    // Brute Force would be do a linear search to check if each number is equal to the target and return its index
    // Time Complexity would be linear O(n)
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;

        while (l <= r) {
            const m = Math.floor((l + r) / 2);

            if (target === nums[m]) return m;

            // sorted portion
            if (nums[l] <= nums[m]) {
                if (nums[l] <= target && nums[m] >= target) {
                    r = m - 1;
                } else {
                    l = m + 1;
                }
            } else {
                if (target >= nums[m] && target <= nums[r]) {
                    l = m + 1;
                } else {
                    r = m - 1;
                }
            }
        }

        return -1;
    }
}

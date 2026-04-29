class Solution {
    // Since the array is sorted but rotated. We can divide the array into two portions and find the sorted portion
    // Once we do we search the opposite portion since we stored the min value in the sorted portion.
    // *** The sorted half cannot contain the pivot point (the minimum), except possibly at its boundary.
    // Time Complexity is O(logn)
    // Space Complexity is O(1)

    // VERY HARD

    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let res = nums[0];
        let l = 0;
        let r = nums.length - 1;

        while (l <= r) {
            if (nums[l] <= nums[r]) {
                res = Math.min(res, nums[l]);
                break;
            }

            const m = Math.floor((l + r) / 2);
            res = Math.min(res, nums[m])

            // left portion is sorted -> search right
            if (nums[l] <= nums[m]) l = m + 1;
            else r = m - 1;
        }

        return res;
    }
}

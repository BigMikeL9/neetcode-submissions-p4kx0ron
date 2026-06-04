class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */

    // We can divide the nums array into two segments to determine which segment does the mid pointer belong to 
    // in a binary search. Once we do, we chack if that target exist in that segment. If it doesn't earch the other segment
    // Time Complexity would be O(logn)
    // Space Complexity would be constant O(1) 

    search(nums: number[], target: number): number {
        let l = 0
        let r = nums.length - 1

        // determing which segment is sorted
        while (l <= r) {
            const m = l + Math.floor((r - l) / 2)

            if (nums[m] === target) return m

            // that means m belongs to the left segment
            if (nums[m] > nums[r]) {
                if (nums[l] <= target && nums[m] > target) r = m - 1
                else l = m + 1
            } else {
                if (nums[m] < target && nums[r] >= target) l = m + 1
                else r = m - 1
            }
        }

        return -1;
    }
}

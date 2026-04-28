class Solution {
    // Since the array is sorted, we can treat it as two segments and use a binary search to 
    // figure out which segment contains the min num
    // Time Complexity is O(logn)
    // Space Complexity is constant O(1)
    // where n is the number of elements in the nums array

    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0;
        let r = nums.length - 1;

        while (l < r) {
            const m = Math.floor((l + r) / 2);

            if (nums[m] > nums[r]) l = m + 1;
            else r = m;
        }

        console.log(l, nums[l])

        return nums[l];
    }
}

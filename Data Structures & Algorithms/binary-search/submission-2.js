class Solution {
    // We can use a Binary Search algorthim where we shrink the searchable window by dividing it by 2 and 
    // then figuring out where to move the pointers depenidng on the middle value

    // Time Complexity is O(logn) because 2^x = n which is log(base 2) of n = x
    // Space Complexity is O(1) 
    // where n is the number if elements in the nums array

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

            if (nums[m] === target) return m;
            else if (nums[m] < target) l = m + 1;
            else r = m - 1;
        }

        return -1;
    }
}

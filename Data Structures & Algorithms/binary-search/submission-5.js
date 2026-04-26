class Solution {
    // Brute force solution woiuld be to do a linear seach where we scan through the nums
    // array, checking if each value is equal to the target. 
    // Time Complexity would be linear O(n)
    // Space Complexity would be constant O(1)

    // An optimal solution would be to use a Binary Search since the array is sorted
    // where we have two pointers, 
    // left and right that point to the first and last element in the current search window
    // we get the midpoint and check if it smaller or greater than our target. Inwhich case, 
    // we shrink the search window to the left or right of the midpoint. 
    // If the midpoint is equal to the target we return true. Otherwise the target does not exist
    // in the nums array.

    // Time Complexity would be O(logn). log base 2 n = x or 2^x = n
    // Space Complexity would be O(1)

    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0 ;
        let r = nums.length - 1;

        while (l <= r) {
            // const m = Math.floor(l + ((r - l) / 2)); // another way of gettting midpoint
            const m = Math.floor((l + r) / 2);

            if (nums[m] < target) l = m + 1;
            else if (nums[m] > target) r = m - 1;
            else return m;
        }

        return -1;
    }
}





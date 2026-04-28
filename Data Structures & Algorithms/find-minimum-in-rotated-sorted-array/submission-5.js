class Solution {
    // Brute Force would be to do a linear search on the nums array
    // to get the min number
    // Time Complexity would linear O(n)
    // Space Complexity would be constant O(1)
    // Where n is the number of element in the nums array
    
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        return Math.min(...nums);
    }
}

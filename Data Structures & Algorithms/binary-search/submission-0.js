class Solution {
    // Brute force would be scan through the array checking if each num is equal to the target
    // Time COmplexity is O(n)
    // Space Complexity is constant O(1)
    // where n the length of nums

    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === target) return i;
        }
        
        return -1;
    }
}

class Solution {
    // Brute force soluiotn would be to to do a linear search to find the min element
    // Time Complexity would O(n)
    // Space Complexiy would be constant O(1)

    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let res = nums[0];

        for (const n of nums) {
            res = Math.min(res, n);
        }

        return res;
    }
}

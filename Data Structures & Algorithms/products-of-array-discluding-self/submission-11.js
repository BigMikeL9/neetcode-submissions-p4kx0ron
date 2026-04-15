class Solution {
    // I will scan through the nums array twice. The first time I will get the product of all nums 
    // before the number at current index. And the second scan I will get the product of all nums after the
    // number at the current index. And store each product in an array.
    // In the end, I will multiply elements at the same index from 
    // both products from the prefix and suffix

    // Time Complexity would be O(n + n) or O(n)
    // Space Complexity would be O(n)
    // where n is the number of elements in the nums array

    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        var res = new Array(nums.length).fill(1);

        var prefix = 1;
        for (var i = 0; i < nums.length; i++) {
            res[i] = prefix; 
            prefix *= nums[i];
        }

        var suffix = 1;
        for (var i = nums.length - 1; i >= 0; i--) {
            res[i] *= suffix;
            suffix *= nums[i];
        }

        return res;
    }
}

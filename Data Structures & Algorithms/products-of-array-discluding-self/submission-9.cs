public class Solution {
        // Optimal Solution: Initialise a fixed array of size nums length
        // Get nums products left of i, and nums products right of i 
        // then the product of left values and right values at index i
        // Time Complexity is O(n) 


    public int[] ProductExceptSelf(int[] nums) {
        var n = nums.Length;
        var res = new int[n];
        Array.Fill(res, 1);

        // Products LEFT of i
        // [1, 2, 3, 4]
        // [a, b, c, d]
        // [1, a, b*a, c*b*a]
        // prefix -> [1, 1, 2, 6]
        for (var i = 1; i < n; i++) {
            res[i] = nums[i - 1] * res[i - 1];
        }

        // Products RIGHT of i
        // [1, 2, 3, 4]
        // [a, b, c, d]
        // [b*c*d, c*d, d, 1]
        // suffix -> [24, 12, 4, 1]

        // result[i] = prefix[i] * suffix[i]
        // res -> [1 * 24, 12*1, 4*2, 6*1]
        int suffix = 1;
        for (var i = n - 1; i >= 0; i--) {
            res[i] *= suffix;
            suffix *= nums[i];
        }

        return res;
    }
}

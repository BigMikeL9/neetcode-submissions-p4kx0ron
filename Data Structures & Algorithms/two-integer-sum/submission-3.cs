public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        // Brute force is looping over each num twice while getting the sum
        // if sum is equal to target, return indices 
        // Time complexity is O(n^2) because we're looping over each num twice
        // Space complexity is O(1) because we dont need to allocate any memory

        var indices = new int[2];

        for (var i = 0; i < nums.Length; i++) {
            for (var j = i + 1; j < nums.Length; j++) {
                var sum = nums[i] + nums[j];
                if(sum == target) return indices = [i, j];
            }
        }  

        return indices;
    }
}

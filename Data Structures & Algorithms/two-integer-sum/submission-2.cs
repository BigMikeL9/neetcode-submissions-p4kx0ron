public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        // Use a HashMap to store the indices as keys and sum value
        // Use two for loops to sum the integers and store their indices
        // Then check the HashMap for value that equal the target
        // Time Complexity is O(n^2) because we're looping over the n twice
        // Space Complexity is also O(n^2)

        var HashMap = new Dictionary<int[], int>();

        for (var i = 0; i < nums.Length; i++) {
            for (var j = i + 1; j < nums.Length; j++) {
                var sum = nums[i] + nums[j];
                if(sum == target) return new int[] { i, j };
            }
        }  

        return new int[2];
    }
}

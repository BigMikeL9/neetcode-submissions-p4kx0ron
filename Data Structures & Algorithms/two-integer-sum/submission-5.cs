public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        // Loop over the nums arr and store the index and the value of each item in a HashMap as kvp
        // Get the difference between the target and the each num
        // Check if the diff exist in the HashMap and return the indices
        // Time Complexity is O(n) where n is the number of elements in the array
        // Space Complexity is O(n) because we migth store upto the number of elements in the arr

        var hashMap = new Dictionary<int, int>();
        var indices = new int[2];

        for (var i = 0; i < nums.Length; i++) {
            var diff = target - nums[i];
            if(hashMap.ContainsKey(diff)) return new int[] { hashMap[diff], i };  
            hashMap[nums[i]] = i;
        }

        return indices;
    }
}

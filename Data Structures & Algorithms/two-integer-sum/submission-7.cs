public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        // Use a HashMap to store the num as key and target minus num as value
        // Iterate through nums, calculating the difference between target and num and storing it in the HashMap
        // Check if defference exist in nums, if it does, return indices
        // Time Complexity is O(n) where n is the maximum number of ints we could iterate through.
        // Space Complexity is O(n) where n in the max number of nums we might store in the HashMap

        var hashMap = new Dictionary<int, int>();
        var indices = new int[2];

        for (var i = 0; i < nums.Length; i++) {
            var diff = target - nums[i];
            if(hashMap.ContainsKey(diff)) return indices = [hashMap[diff], i];
            hashMap.Add(nums[i], i);
        }

        return indices;
    }

}

public class Solution {
    // I will use a HashMap to store the num as key and the index as value
    // I will iterate through nums, getting the diff, checking if the difference exist in the hashmap as key
    // if it does, return the indices.
    // If it doesn't, add the current num and diff to the hashmap
    // Time Complexity is O(n) where n is the number of elements in the nums array
    // Space Complexity is O(n) where n is also the number of elements in the nums array and in 
    // worst case we would store all nums in the hashMap

    // Brute Force would be to iterate through the nums array twice, checking if the diff of current number
    // exist in the array and returning indices.
    // Time Complexity would be O(n^2)
    // Space Complexity would be O(2) or O(1)

    public int[] TwoSum(int[] nums, int target) {
        var hashMap = new Dictionary<int, int>();
        var res = new int[2];

        for (var i = 0; i < nums.Length; i++) {
            var diff = target - nums[i];
            if(hashMap.ContainsKey(diff)) return res = [hashMap[diff], i];
            hashMap.Add(nums[i], i);
        }

        return res;
    }
}

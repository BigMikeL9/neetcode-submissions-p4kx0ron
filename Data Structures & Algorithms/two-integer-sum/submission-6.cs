public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        // Iterate over the nums arr and getting the diff between the target and the num
        // then check if the diff exist in the HashMap
        // If it does, return the index of the diff from the HashMap andf the curr num index.
        // If it doesn't exist, add it to the HashMap with its value and index as kvp
        // We use a HashMap for O(1) lookup
        // Time Complexity is O(n) where n is the number of elements in the array
        // Space Complexity is O(n) because we migth store upto the number of elements in the arr

        // Brute for would be using two loops to get the sum of each pair in the nums arr
        // Time Complexity would be O(n^2) because we iterate over each el in the arr upto to twice
        // Space Complexity would be O(1) becasue we dont need to store the sum

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

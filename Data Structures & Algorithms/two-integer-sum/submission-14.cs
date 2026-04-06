public class Solution {
    // I will iterate throught the nums array, getting the difference between the curr num and the target
    // and then storing it in a HashMap where the key is the diff and value is the index
    // As I iterate through the nums I will check if the hashMap contains the diff, if so return the 
    // the index of the current num and the value of the hashMap element. 
    // HashMap is used for O(1) lookups

    // Time Complexity is O(n) where n is the number of elements in the array
    // Space Complexity is O(n) where in worst case we store all the elements in nums in the HashMap

    public int[] TwoSum(int[] nums, int target) {
        var hashMap = new Dictionary<int, int>();

        for (var i = 0; i < nums.Length; i++) {
            var diff = target - nums[i]; // 7 - 3 = 4
            if(hashMap.ContainsKey(diff)) return new int[2] { hashMap[diff], i};
            hashMap.Add(nums[i], i);
        }

        return new int[2];
    }
}

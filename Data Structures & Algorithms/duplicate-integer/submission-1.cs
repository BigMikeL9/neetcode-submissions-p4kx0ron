public class Solution {
    public bool hasDuplicate(int[] nums) {
        // Use a HashSet to store distinct nums in while checking if it contains the current num
        // Time Complexity is O(n) where n is the lenght of nums
        // Space Complexity is O(n) where is n also the length of nums

        var hashSet = new HashSet<int>();

        foreach (var num in nums) {
            if(hashSet.Contains(num)) return true;
            hashSet.Add(num);
        }

        return false;
    }
}
public class Solution {
    // I will use a HashSet for O(1) lookups 
    // I will iterate through nums checking if the hashSet contains current num, 
    // in which case I would return false, otherwise add the current num to the hashset
    // Time Complexity is O(n) where n is the number of elements in the nums array
    // Space Complexity is O(n) where n is the number of elements in the nums array where in worst
    // case we store all elements. 

    public bool hasDuplicate(int[] nums) {
        var hashSet = new HashSet<int>();

        foreach (var n in nums) {
            if(hashSet.Contains(n)) return true;
            hashSet.Add(n);
        }

        return false;
    }
}
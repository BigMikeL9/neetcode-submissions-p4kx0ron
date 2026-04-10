public class Solution {
    // I will use a hashSet for O(1) lookups. As I iterate throught the array, I will check if current
    // num is in the hashSet. If it is, return false. It it is not, add it to the hashSet.
    // Time Complexity is O(n) where n is the number of elements in the array
    // Space Complexity is O(n) where is worst case we store all nums in the hashSet

    public bool hasDuplicate(int[] nums) {
        var hashSet = new HashSet<int>();

        foreach (var n in nums) {
            if(hashSet.Contains(n)) return true;
            hashSet.Add(n);
        }    

        return false;
    }
}
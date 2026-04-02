public class Solution {
    // Optimal solution would be to store the nums array in a HashSet for O(1) lookups. 
    // Then checking if each num is the start of a sequence by subtracting it by 1 and checking if the hashset
    // does not contain the res, if it doesn't check if the preceding number exist in the hashet by adding 1
    // to the current num and check if the result exist in the hashset. Keeping track of the sequence. 
    // In the end of the loop set the res variable to the max between the streak and the res.
    // Time Complexity will be O(n) where n is the number of elements in the array
    // Space Complexity will be O(n) for the memory allocated for the HashSet

    public int LongestConsecutive(int[] nums) {
        var hashSet = new HashSet<int>(nums);
        var res = 0;

        foreach (var n in nums) {
            var curr = n; 
            var streak = 1;
            
            // start of seq
            if(!hashSet.Contains(curr - 1)) {
                while (hashSet.Contains(curr + 1)) {
                    streak++;
                    curr++;
                }
            }

            res = Math.Max(streak, res);
        }

        return res;
    }
}

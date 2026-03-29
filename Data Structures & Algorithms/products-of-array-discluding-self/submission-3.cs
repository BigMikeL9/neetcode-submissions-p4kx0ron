public class Solution {
    // Brute Force solution would be to iterate throught the array twice, using the index to skip the current 
    // num and get the product of all the other nums in the array. 
    // Time Complexity would be O(n^2) where n is the nums length
    // Space Complaxity would be O(n) where n is the nums length
    

    public int[] ProductExceptSelf(int[] nums) {
        var res = new List<int>();

        for (var i = 0; i < nums.Length; i++) {
            var p = 1;

            for (var j = 0; j < nums.Length; j++) {
                if(i != j) p *= nums[j]; 
            }
                
            res.Add(p);
        }

        return res.ToArray();
    }
}

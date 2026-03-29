public class Solution {
    public int[] ProductExceptSelf(int[] nums) {
        // Brute Force: I will use a nested loop to iterate over the nums array twice, getting the product
        // of the current num and adding it to a list of nums
        // Time Conmplexity is O(n^2) where n is the length of nums
        // Space Complexity is O(n)

        var res = new List<int>();

        for (var i = 0; i < nums.Length; i++) {
                var p = 1;
                // Console.WriteLine($"--{i}--");
            for (var j = 0; j < nums.Length; j++) {
                // Console.WriteLine(j);
                if(i != j) p *= nums[j];
            }

            res.Add(p);
        }

        return res.ToArray();

    }
}

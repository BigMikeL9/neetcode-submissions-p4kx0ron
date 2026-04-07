public class Solution {
    // Optimal solution would be to sort the array and use a two pointer algorithm.
    // After sorting, I will iterate through the nums trating the curr num as fixed
    // and having the left pointer pointing at the number preceding the fixed numm while the right 
    // pointer pointing at the last element in the array. 
    // As I get the sum, I will check if it is less than 0 inwhich case I will increment the left pointer
    // or move it to the right, it the sum is greater than 0, I will decrement the right pointer or move
    // it to the left. If it is equal to 0, I will add it to the list.

    // Time Complexity is O(n^2) where n is the number of elements in nums
    // Space Complexity is O(n)

    // [-4, -1, -1, 0, 1, 2]
    public List<List<int>> ThreeSum(int[] nums) {
        var res = new List<List<int>>();
        Array.Sort(nums);

        for (var i = 0; i < nums.Length; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) continue;
            var l = i + 1;
            var r = nums.Length - 1;

            while (l < r) {
                var currN = nums[i];
                var leftN = nums[l];
                var rightN = nums[r];

                var sum = currN + leftN + rightN;

                if (sum > 0) r--;
                else if (sum < 0) l++;
                else {
                    res.Add(new List<int>() { currN, leftN, rightN });
                    l++;
                    r--;
                    
                    while (l < r && leftN == nums[l]) l++;
                    while (l < r && rightN == nums[r]) r--;
                };

                
            }
        }

        return res;
    }
}

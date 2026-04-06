public class Solution {
    // I will use a two pointer algorithm to get the triplets. I will first sort the array then 
    // iterate through it using the current num as a fixed number in the sum, the left pointer 
    // pointing to the num right after the fixed number and the right pointer represent the last element
    // in the array. If the sum of all three is less than 0, I will increment the left pointer, 
    // if it is less than 0, I will decrement the right pointer or move it to the left. 
    // Sorting the array will help us track duplicates, and be able to move the pointers from left
    // and right to the center
    // Time Complexity will be O(nlogn + n^2) or O(n^2) where n is the number of elements in the array
    // Space Complexity will be O(1) excluding memory allocated for the result which is O(m)
    // where m is the number of triplets

    // [-4, -1, -1, 0, 1, 2]
    // -4 + -1 + 2 = -3
    public List<List<int>> ThreeSum(int[] nums) {
        var res = new List<List<int>>();
        Array.Sort(nums);

        for (var i = 0; i < nums.Length; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) continue;
            var l = i + 1;
            var r = nums.Length - 1;

            while (l < r) {
                var currVal = nums[i];
                var leftVal = nums[l];
                var rightVal = nums[r];

                var sum = currVal + leftVal + rightVal;

                if(sum > 0) {
                    r--;
                    continue;
                }

                if (sum < 0) {
                    l++;
                    continue;
                }

                if (sum == 0) {
                    res.Add(new List<int>() { currVal, leftVal, rightVal });

                    r--;
                    l++;

                    // check for duplicates and skip
                    while (l < r && rightVal == nums[r]) r--;
                    while (l < r && leftVal == nums[l]) l++;
                };

                
            }
        }

        return res;
    }
}

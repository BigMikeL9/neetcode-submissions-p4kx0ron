public class Solution {
    // Since we're dealing with a sorted array we can use a two pointer algorithm where we 
    // scan the array from left and right getting the sum of the numbers at each index
    // if the sum is greater than the target then we move the pointer right, if sum is 
    // less than the target we move the left pointer to the next preceding num in the array
    // Time Complexity is O(n) since each num will be visited at most once
    // Space Complexity is Constant O(1) since were not allocation any extra memory

    public int[] TwoSum(int[] numbers, int target) {
        var left = 0;
        var right = numbers.Length - 1;

        while (left < right) {
            var sum = numbers[left] + numbers[right];

            if (sum == target) return new int[] { left + 1, right + 1 };
            
            if(sum > target) {
                right--;
                continue;
            }

            if(sum < target) {
                left++;
                continue;
            }
        }
        
        return new int[2];
    }
}

public class Solution {
    // Since the the numbers array is sorted and we can only have an O(1) space complexity
    // I will use a two pointer algorithm where the left pointer points to the first element 
    // in the array and the right pointer to the last element. As I i terate throught the array
    // I will get the sum of the values at the pointers. If the sum is less than the target, 
    // I will move the left pointer to the right by incrementing it. If sum is greater than the 
    // target, I will move the right pointer to the left.

    // Time Complexity is O(n) where n is the number of elements in the numbers array
    // Space Complexity is O(1) since no memory allocation was needed  

    public int[] TwoSum(int[] numbers, int target) {
        if (numbers.Length < 0) return new int[2];
        var l = 0;
        var r = numbers.Length - 1;

        while (l < r) {
            var sum = numbers[l] + numbers[r];

            if(sum > target) {
                r--;
                continue;
            }
            
            if(sum < target) {
                l++;
                continue;
            }

            if(sum == target) return new int[2] { l + 1, r + 1 }; 
        }

        return new int[2];
    }
}

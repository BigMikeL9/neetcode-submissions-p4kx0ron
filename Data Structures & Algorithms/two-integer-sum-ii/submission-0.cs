public class Solution {
    // Brute force would be to use a nested loop to iterate through the numbers array twice,
    // getting the sum of the curr num and each other num in the array.
    // If the sum is equal to the target, return the indeices. 
    // Time Complexity would be O(n^2)
    // Space Complexity will be O(1)

    public int[] TwoSum(int[] numbers, int target) {
        
        for (var i = 0; i < numbers.Length; i++) {
            for (var j = 0; j < numbers.Length; j++) {
                var sum = numbers[i] + numbers[j];
                if(sum == target) return new int[] { i + 1, j + 1 };
            }
        }

        return new int[2];
    }
}

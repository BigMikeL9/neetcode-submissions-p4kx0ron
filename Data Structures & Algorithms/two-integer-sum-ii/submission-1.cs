public class Solution {
    // I will use a two pointer algorithm. One pointer will be equal to the curr num index
    // and the other will represent the indices of other elements in the array 
    // As I iterate through them I will get the sum and check if its equal to the target
    // Time Complexity is O(n) where n is the number of elements in the numbers array
    // Space Complexity is O(1)

    public int[] TwoSum(int[] numbers, int target) {
        var i = 0;

        while (i < numbers.Length) {
            var j = i + 1;

            while (j < numbers.Length) {
                var sum = numbers[i] + numbers[j];
                if(sum == target) return new int[] { i + 1, j + 1 };
                j++;
            }

            i++;
        }

        return new int[2];
    }
}

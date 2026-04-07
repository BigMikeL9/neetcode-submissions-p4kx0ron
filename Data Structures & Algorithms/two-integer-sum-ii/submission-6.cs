public class Solution {
    // Since this is a sorted array, I will use a two pointer algorithm, 
    // where the left pointer is at the first element and the right
    // at the last element in the array. I will get the diff between the values at each pointer,
    // if it is less than the target, I will move the left pointer right and if it is more
    // I will move the right pointer left

    // Time Complexity is O(n) where n in the number of elements in the array
    // Space Complexity is constant or O(1) since no extra memory was needed for the algorithm

    public int[] TwoSum(int[] numbers, int target) {
        if (numbers.Length == 0) return new int[2];
        var l = 0;
        var r = numbers.Length - 1;

        while (l < r) {
            var diff = numbers[l] + numbers[r];

            if (diff < target) l++;
            else if (diff > target) r--;
            else return new int[2] { l + 1, r + 1 };
        }

        return new int[2];
    }
}

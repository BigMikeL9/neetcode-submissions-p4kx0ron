public class Solution {
    // Brute force would be use a nested loop to get the diff between every two pairs in the array
    // The diff will calculated by subrtacting the current num to each after it in the array
    // Time Complexity would be O(n) where n is the number of elements in the array
    // Space Complexity would be constant or O(1)

    public int MaxProfit(int[] prices) {
        var res = 0;

        for (var i = 0; i < prices.Length; i++) {
            for (var j = i + 1; j < prices.Length; j++) {
                var diff = prices[j] - prices[i];
                res = Math.Max(diff, res);
            }
        }    

        return res;
    }
}

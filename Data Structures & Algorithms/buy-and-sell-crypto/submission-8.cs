public class Solution {
    // I will use a two pointer algorithm to scan through the array from left to right
    // The left pointer will start at the first element (buy), and the right pointer will 
    // start second element (sell)
    // I will first check if the array has any or more than one element, in which case retrurn 0
    // As I iterate throught the array, if left pointer > right pointer -> incremenet both pointers
    // If left < right -> ie: when a lower price is found, we should buy at the lower price
    // so move left == right and increment right
    // Time Complexity is O(n) where n is the number of elements in the array
    // Space Complexity is O(1)

    public int MaxProfit(int[] prices) {
        if (prices.Length < 1) return 0;

        var maxProfit = 0;
        var l = 0;
        var r = 1;

        while (r < prices.Length) {
            var buy = prices[l];
            var sell = prices[r];
            
            if (buy == sell) r++;

            // check preceding sell prices
            if (buy < sell) {
                r++;
            }

            // check for new buying price
            if (buy > sell) {
                l = r;
                r++;
            }

            var profit = sell - buy;
            maxProfit = Math.Max(maxProfit, profit);
        }
       
        return maxProfit;
    }
}
class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let l = 0;
        let r = l + 1;

        while (r < prices.length) {
            profit = Math.max(profit, prices[r] - prices[l]);
            if (prices[l] > prices[r]) l = r;
            r++;               
        }

        return profit;
    }
}

class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let res = 0

        let l = 0;

        for (let i = 1; i < prices.length; i++) {
            // profit = selling price - buying price
            const profit = prices[i] - prices[l]
            
            console.log(profit)
            
            res = Math.max(res, profit)

            while (prices[i] <= prices[l] && l < i) {
                l++
            }
        }

        return res
    }
}

class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let maxProfit = 0

        let l = 0
        for (let r = 1; r < prices.length; r++) {
            while (prices[l] > prices[r]) {
                l = r
                continue
            }

            maxProfit = Math.max(maxProfit, prices[r] - prices[l])
        }

        return maxProfit
    }
}

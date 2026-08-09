class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        if (prices.length < 1) return  prices[0]
        let res = 0
        let l = 0
        let r = 1

        while (r < prices.length) {
            if (prices[l] > prices[r]) l = r
            res = Math.max(res, prices[r] - prices[l])
            r++
        }

        return res
    }
}

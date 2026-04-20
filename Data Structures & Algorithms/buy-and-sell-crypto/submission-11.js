class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if (prices.length - 1 <= 0) return 0;
        let res = 0;
        let l = 0;
        let r = 1;

        while (l < r && r < prices.length) {
            // sell > buy
            if (prices[r] >= prices[l]){
                res = Math.max(res, prices[r] - prices[l]); 
                r++;
            }
            else {
                l = r;
                r++;
            }
        }

        return res;
    }
}

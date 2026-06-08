class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */

    // We can use a sliding window algorithm where we have two pointer represtenting the buy and selling 
    // prices. The left pointer will start at the first element and the right pointer will start at 
    // the second element. As we scan through the prices, we want to check if we are in profit, by 
    // checking if the selling price is greater than the buying price. If it isn't, we want find a better
    // buying price, so we move both pointers to the right. Otherwise, if we are in profit we want to 
    // find a better selling price, so we keep incrementing the right pointer, storing the profit as
    // as we along. 
    // Time Complexity would be linear O(n)
    // Space Complexity would be constant O(1) since we dont need any extra memory allocated for a 
    // data structure

    maxProfit(prices: number[]): number {
        let res = 0;

        let l = 0;
        let r = l + 1;

        while (r < prices.length) {
            
            if (prices[r] > prices[l]) {
                const profit = prices[r] - prices[l];
                res = Math.max(res, profit)
            } else {
                l = r
            }

            r++
        }

        return res
    }
}

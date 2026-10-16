class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        max_profit = 0
        l = 0

        for r in range(1, len(prices)):
            # if buy price is greater than sell price 
            # then buy at sell price
            if prices[l] > prices[r]:
                l = r
                continue

            # if we're in profit 
            # find more profit
            if prices[r] - prices[l] > max_profit:
                max_profit = max(max_profit, prices[r] - prices[l])

        return max_profit

        # Time: O(n)
        # Space: O(1) bec we dont need to allocate memory for any data structure
        # where n is the size of prices
        

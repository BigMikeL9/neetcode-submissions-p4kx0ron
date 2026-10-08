class Solution:
    def rob(self, nums: List[int]) -> int:
        dp = [None] * len(nums)
        
        def dfs(i):
            if i >= len(nums):
                return 0

            if dp[i] != None:
                return dp[i]

            left = dfs(i + 2)
            right = dfs(i + 3)

            dp[i] = nums[i] + max(left, right)

            return dp[i]

        return max(dfs(0), dfs(1))
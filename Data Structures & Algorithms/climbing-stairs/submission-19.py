class Solution:
    def climbStairs(self, n: int) -> int:
        dp = [None] * (n + 1)

        dp[-1] = 1
        dp[-2] = 1

        for i in range(n - 2, -1, -1):
            one = dp[i + 1]
            two = dp[i + 2]

            dp[i] = one + two

        return dp[0]
class Solution:
    def climbStairs(self, n: int) -> int:
        dp = [None] * (n + 1)

        def dfs(i, path):

            if i == n:
                return 1

            if i > n:
                return 0

            # memoization
            if dp[i] != None:
                return dp[i]

            # dfs(0, 0)
            # LEFT -> dfs(1, 0) -> LEFT dfs(2, 0) + 1 -> RIGHT dfs(4, 0) Return 0
            # RIGHT -> dfs(2, 0) + 1 -> LEFT dfs(1, 0) return 0 -> dfs(4, 0) return 0
            left = dfs(i + 1, path) # 1
            right = dfs(i + 2, path) # 1

            dp[i] = left + right

            return dp[i]

        return dfs(0, 0)





        
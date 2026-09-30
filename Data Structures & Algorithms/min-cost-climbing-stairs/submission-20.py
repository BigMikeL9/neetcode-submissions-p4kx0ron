class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        cache = [None] * len(cost)

        def dfs(i):
        
            if i >= len(cost):
                return 0

            if cache[i] != None:
                return cache[i]

            left = dfs(i + 1)
            right = dfs(i + 2)

            cache[i] = cost[i] + min(left, right)
            # print(i, cache)
            return cache[i]

        return min(dfs(0), dfs(1))
        
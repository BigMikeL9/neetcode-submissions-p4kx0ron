class Solution:
    def climbStairs(self, n: int) -> int:
        arr = [None] * (n + 1)

        def dfs(i):
            if i == n:
               return 1

            if i > n:
                return 0
            
            if arr[i] is not None:
                print(i, arr)
                return arr[i]

            left = dfs(i + 1)
            right = dfs(i + 2)

            arr[i] = left + right

            return arr[i]

        return dfs(0) 
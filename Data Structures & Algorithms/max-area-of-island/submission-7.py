class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        ROWS = len(grid)
        COLS = len(grid[0])

        res = 0

        def dfs(r, c, count = 0):
            if r < 0 or c < 0 or r > ROWS - 1 or c > COLS - 1:
                return 0

            if grid[r][c] == 0:
                return 0

            grid[r][c] = 0

            top = dfs(r + 1, c)
            bottom = dfs(r - 1, c)
            right = dfs(r, c + 1)
            left = dfs(r, c - 1)

            return (1 + top + bottom + right + left)

        for r in range(ROWS):
            for c in range(COLS):
                count = dfs(r, c, 0)
                res = max(res, count)
        
        return res

    # Time: O(n) 
    # Space: O(n) for the recursive callstack
    # where n is the number of cells


        
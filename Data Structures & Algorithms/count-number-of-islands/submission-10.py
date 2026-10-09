class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        ROWS = len(grid)
        COLS = len(grid[0])
        
        res = 0
        
        def dfs(r, c):
            if r < 0 or c < 0 or r > ROWS - 1 or c > COLS - 1:
                return False

            if grid[r][c] == "0":
                return False

            grid[r][c] = "0"

            dfs(r + 1, c)
            dfs(r - 1, c)
            dfs(r, c - 1)
            dfs(r, c + 1)

            return True
        
        for r in range(ROWS):
            for c in range(COLS):
                if dfs(r, c):
                    res += 1

        return res
        
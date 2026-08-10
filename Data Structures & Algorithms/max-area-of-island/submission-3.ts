class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid: number[][]): number {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        let res = 0

        const dfs = (r: number, c: number, count: number = 0) => {
            if (r < 0 || c < 0 || r > ROWS - 1 || c > COLS - 1) return 0
            if (grid[r][c] == 0) return 0

            grid[r][c] = 0;

            count = dfs(r + 1, c) + 
                    dfs(r - 1, c) +
                    dfs(r, c + 1) +
                    dfs(r, c - 1)

            return 1 + count;
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 1) {
                    const count = dfs(r, c)
                    res = Math.max(res, count)
                }
            }
        }

        return res
    }

    
}

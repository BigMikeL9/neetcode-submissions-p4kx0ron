class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        const ROWS = grid.length
        const COLS = grid[0].length

        let res = 0

        const dfs = (r: number, c: number) => {
            if (r < 0 || c < 0 || r > ROWS - 1 || c > COLS - 1) return
            if (grid[r][c] === "0") return

            grid[r][c] = "0"

            dfs(r + 1, c)
            dfs(r - 1, c)
            dfs(r, c + 1)
            dfs(r, c - 1)
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === "1") {
                    res += 1
                    dfs(r, c)
                }
            }
        }

        return res
    }

    // Time: O(ROWS * COLS) or O(n)
    // Space: O(n)
    // where n is the number of cells
}

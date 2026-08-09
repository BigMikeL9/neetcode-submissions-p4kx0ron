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
            if (r < 0 || c < 0 || r > ROWS - 1 || c > COLS - 1) return false
            if (grid[r][c] === "0") return false

            grid[r][c] = "0"

            console.log({r, c})

            dfs(r + 1, c)
            dfs(r - 1, c)
            dfs(r, c + 1)
            dfs(r, c - 1)

            return true
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
}

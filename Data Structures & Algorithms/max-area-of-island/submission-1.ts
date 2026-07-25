class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid: number[][]): number {
        const ROWS = grid.length
        const COLS = grid[0].length
        
        let res = 0
        const hashset = new Set()

        const dfs = (r: number, c: number) => {
            // if out of bounds
            if (r < 0 || c < 0 || r > ROWS - 1 || c > COLS - 1) return 0

            // if not a land
            if (grid[r][c] !== 1) return 0

            const key = `${r}-${c}`
            
            // if seen land
            if (hashset.has(key)) return 0

            hashset.add(key)

            return (1 + 
                    dfs(r + 1, c) + 
                    dfs(r - 1, c) + 
                    dfs(r, c + 1) + 
                    dfs(r, c - 1))
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                console.log(`${r}--${c}`)
                res = Math.max(res, dfs(r, c))
            }
        }

        return res
    }
}

// time: O(ROW * COL)
// space: O(ROW * COL)

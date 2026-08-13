class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid: number[][]): void {
        const ROWS = grid.length
        const COLS = grid[0].length
        const INF = 2147483647
        const queue = []

        const bfs = (r: number, c: number, i: number, visiting: Set<string>) => {
            if (r < 0 || c < 0 || r > ROWS - 1 || c > COLS - 1) return 
            if (grid[r][c] === -1) return 
            if (grid[r][c] !== INF) return

            grid[r][c] = i + 1
            queue.push([r, c])
            visiting.add(`${r}-${c}`)
            // console.log({queue})
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 0) queue.push([r, c])
            }
        }

        while (queue.length) {
            const [r, c] = queue.shift()

            const i = grid[r][c]
            const visiting = new Set<string>()

            bfs(r + 1, c, i, visiting)
            bfs(r - 1, c, i, visiting)
            bfs(r, c + 1, i, visiting)
            bfs(r, c - 1, i, visiting)
        }

        // Time: O(n)
        // Space: O(n) for recursive callstack
        // where n is the number of cells
    }
}

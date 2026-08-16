class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid: number[][]): number {
        const ROWS = grid.length
        const COLS = grid[0].length

        let fresh = 0
        let time = 0
        let queue: [number, number][] = []

        const bfs = (r: number, c: number): number => {
            if (r < 0 || c < 0 || r > ROWS - 1 || c > COLS - 1) return 0
            if (grid[r][c] === 0) return 0
            if (grid[r][c] === 2) return 0

            fresh -= 1
            grid[r][c] = 2
            queue.push([r, c])
            return 1
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] == 1) fresh += 1
                if (grid[r][c] == 2) queue.push([r, c])
            }
        }

        while (queue.length) {
            const size = queue.length
            let rottedThisRound = false // any fresh to rotten?

            for (let i = 0; i < size; i++) {
                const [r, c] = queue.shift()

                const res = bfs(r + 1, c) + 
                            bfs(r - 1, c) +
                            bfs(r, c + 1) +
                            bfs(r, c - 1)
                
                if (res > 0) rottedThisRound = true
            }

            if (rottedThisRound) time += 1
        }

        console.log({grid})
        return fresh != 0 ? -1 : time
    }

    // Time: O(n)
    // Space: O(n)
    // where n is the number of cells
}

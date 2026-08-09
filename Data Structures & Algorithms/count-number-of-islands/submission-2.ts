class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        const ROWS = grid.length
        const COLS = grid[0].length
        let res = 0

        let visited = new Set()
        
        const dfs = (depth: number, r: number, c: number) => {
            if (r > ROWS - 1 || c > COLS - 1 || r < 0 || c < 0) return false

            if (grid[r][c] === "0") return false

            const key = `${r}-${c}`
            if (visited.has(key)) return false
            visited.add(key)

            if (depth === 0) res += 1

            dfs(depth + 1, r + 1, c) 
            dfs(depth + 1, r - 1, c)
            dfs(depth + 1, r, c + 1)
            dfs(depth + 1, r, c - 1)
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                dfs(0, r, c)
            }
        }

        console.log(visited)

        return res
    }
}

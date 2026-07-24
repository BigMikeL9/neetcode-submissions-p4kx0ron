// we can iterate through each cell in the grid, if we encounter a '1' we recursivley 
// check all of its neighbors.
// We need to account for a few edge cases. If we're out of bounds. Keeping track of visited cells 
// using a hashset so we can avoid visiting them again. 

// Time Complexity would be O(m * 4^n)
// Space Complexity would be O(n)
// where m is the number of the cells in the grid and n is the number of island cells
// Space is recursive call stack + keys stored in the hashset O(n + n) which is simplified to O(n)

class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        const ROWS = grid.length
        const COLS = grid[0].length

        let res = 0
        const hashset = new Set()

        const dfs = (depth: number, r: number, c: number) => {
            // base case

            if (r < 0 || c < 0 || r > ROWS - 1 || c > COLS - 1) return            

            if (grid[r][c] === '0') return 

            const key = `${r}-${c}`
            if (hashset.has(key)) return 

            hashset.add(key)
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

        return res
    }
}

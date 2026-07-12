// we need to check if a word can be formed in the 2-d grid. We can do so by checking if 
// a letter exist in the word and then recursivly checking if any of its neighboring letters also 
// exist in the grid.
// Time Complexity would be O(n * m * 4^n)
// Space Complexity would be O(n)
// where n is the size of word and m is the number of letters in the grid

class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board: string[][], word: string): boolean {
        const ROW = board.length
        const COL = board[0].length
        const visited = new Set() // keeps track of visited letters arounf curr letter

        const dfs = (i: number, r: number, c: number) => {
            // base case
            if (i === word.length) return true

            // conditions to return false
            // out of bounds
            if (r < 0 || c < 0 || r >= ROW || c >= COL) return false

            // if curr letter not in word
            if (board[r][c] !== word[i]) return false

            // if we have visited the letter before
            const key = `${r}-${c}`
            if (visited.has(key)) return false

            visited.add(key)

            const res = dfs(i + 1, r + 1, c) ||
                        dfs(i + 1, r - 1, c) ||
                        dfs(i + 1, r, c + 1) ||
                        dfs(i + 1, r, c - 1)

            visited.delete(key)

            return res
        }

        for (let r = 0; r < ROW; r++) {
            for (let c = 0; c < COL; c++) {
                const res = dfs(0, r, c)
                if (res === true) {
                    console.log({r, c})
                    return true
                }
            }
        }

        return false
    }
}

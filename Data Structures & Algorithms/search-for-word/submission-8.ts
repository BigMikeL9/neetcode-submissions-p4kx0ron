class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board: string[][], word: string): boolean {
        const ROWS = board.length
        const COLS = board[0].length

        const hashset = new Set()

        // recursively checks every neighboring cells
        const dfs = (i: number, r: number, c: number) => {
            // base case
            if (i === word.length) {
                return true
            }

            // out of bounds
            if (r < 0 || c < 0 || r > ROWS - 1 || c > COLS - 1) return false

            // check letter
            if (word[i] !== board[r][c]) return false

            // check seen letters
            const key = `${r}-${c}`
            if (hashset.has(key)) return false

            hashset.add(key)
            // console.log('BEFORE', { word, l: word[i], i, r, c, hashset })

            const res = dfs(i + 1, r + 1, c) ||
                        dfs(i + 1, r - 1, c) ||
                        dfs(i + 1, r, c + 1) ||
                        dfs(i + 1, r, c - 1)

            hashset.delete(key)
            // console.log('AFTER', { word, l: word[i], i, r, c, hashset })
            // console.log(res)
            return res
        }

        // check every cell
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (dfs(0, r, c)) return true
            }
        }

        return false
    }
}

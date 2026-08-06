class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const ROWS = board.length
        const COLS = board[0].length
        
        const rowsHashMap = new Map()
        const colsHashMap = new Map()
        const boxesHashMap = new Map()

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (board[r][c] === '.') continue

                const boxKey = `${Math.floor(r/3)}-${Math.floor(c/3)}`

                if (!rowsHashMap.has(r)) rowsHashMap.set(r, new Set())
                if (!colsHashMap.has(c)) colsHashMap.set(c, new Set())
                if (!boxesHashMap.has(boxKey)) boxesHashMap.set(boxKey, new Set())

                if (rowsHashMap.get(r).has(board[r][c])) return false
                if (colsHashMap.get(c).has(board[r][c])) return false
                if (boxesHashMap.get(boxKey).has(board[r][c])) return false

                rowsHashMap.get(r).add(board[r][c])
                colsHashMap.get(c).add(board[r][c])
                boxesHashMap.get(boxKey).add(board[r][c])
            }
        }

        console.log(rowsHashMap)
        console.log(colsHashMap)
        console.log(boxesHashMap)
        return true
    }
}

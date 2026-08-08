class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        const ROWS = matrix.length
        
        for (let i = 0; i < ROWS; i++) {
            // 1 > 10 || 8 < 10 -> skip row
            // 10 > 10 || 13 < 10
            // 1 > 3 || 3 < 3
            if (matrix[i][0] > target || matrix[i][matrix[i].length - 1] < target) continue

            console.log({row: matrix[i]})

            if (matrix[i][0] === target) return true
            if (matrix[i][matrix[i].length - 1] === target) return true

            // do a binary search on the row
            let l = 0
            let r = matrix[i].length - 1

            while (l <= r) {
                const m = Math.floor(l + (r - l) / 2)

                if (matrix[i][m] === target) return true

                if (matrix[i][m] > target) r = m - 1
                else l = m + 1
            }
        }

        return false
    }
}

class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */

    // A non-optimal solution would be to scan through each row, chacking if our target is between 
    // the first the last numbers. If it is, we do a binary search in that row to chack if our targte exist.
    // Time Complexity would O(mlogn)
    // Space Complexity would constant O(1)

    // And optimal solution would to the a nested binary search to first find the row and then look 
    // for the number inside that row
    // Time Complexity would O(log(m * n))
    // Space Complexity would be constant O(1)

    searchMatrix(matrix: number[][], target: number): boolean {
        let l = 0
        let r = matrix.length - 1
        let row = null;

        while (l <= r) {
            const m = Math.floor(l + (r - l) / 2);
            const first = matrix[m][0]
            const last = matrix[m][matrix[m].length - 1]

            // check if target might exist in row
            if (first <= target && last >= target) {
                row = m
                break
            }

            if (target > first) l = m + 1;
            else r = m - 1
        }

        if (row === null) return false;

        l = 0
        r = matrix[row].length - 1

        while (l <= r) {
            const m = Math.floor(l + (r - l) / 2)

            if (matrix[row][m] === target) return true
            if (matrix[row][m] < target) l = m + 1
            else r = m - 1
        }

        return false
    }
}

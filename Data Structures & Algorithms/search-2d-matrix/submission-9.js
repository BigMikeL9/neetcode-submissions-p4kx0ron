class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let row = null;

        for (let i = 0; i < matrix.length; i++) {
            if (target >= matrix[i][0] && target <= matrix[i][matrix[i].length - 1]) row = i;
        }

        if (row === null) return false;

        let l = 0;
        let r = matrix[row].length - 1;

        while (l <= r) {
            const m = Math.floor((l + r) / 2);

            if (target > matrix[row][m]) l = m + 1;
            else if (target < matrix[row][m]) r = m - 1;
            else return true;
        }

        return false;
    }
}

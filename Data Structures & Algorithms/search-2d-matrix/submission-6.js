class Solution {
    // ForFirst we need to figure out which row might contain the target.
    // Since each row is sorted we can use two pointers to check if the target
    // is between that window. If it is then we can do a binary search using that row
    // to try to fing the target. 

    // Time Complexity would be O(log (n * m))
    // Space Complexity would be constant O(1)
    // where m is the number of rows and n is the length of elements in each row

    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        
        for (let i = 0; i < matrix.length; i++) {
            // check if target is within range
            // 0 < 1
            if (target < matrix[i][0] || target > matrix[i][matrix[i].length - 1] ) continue;

            let l = 0;
            let r = matrix[i].length - 1;

            while (l <= r) {
                const m = Math.floor((l + r) / 2);

                if (matrix[i][m] === target) return true;
                if (matrix[i][m] < target) l = m + 1;
                if (matrix[i][m] > target) r = m - 1;
            }
        }
        
        return false;
    }
}




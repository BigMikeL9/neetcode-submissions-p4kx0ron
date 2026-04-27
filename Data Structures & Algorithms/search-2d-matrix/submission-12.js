class Solution {
    // Since we know that the first integer in every row is greater than the row before it, 
    // We can use a Binary search to figure out which row out target might be in
    // And use another binary search in that row to figure out if the target actually exist.
    // Time Complexity is O(logn + logm) or O(log(n * m)) 
    // where n is the number of rows and m is the number of elements inside of each row
    // Space Complexity is constant O(1)

    // Brute force solution would to do a linear search to find the row using the first and the last element
    // in each row and checking if the target is between those values.
    // Then do another linear search on the row to find the target if it exists in that row
    // Time Complexity would O(n + m)
    // Space Complexity would be constant O(1)
    // Where n is the number of rows and m is the number of elements inside of each row

    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let row = null;

        let rowL = 0;
        let rowR = matrix.length - 1;

        while (rowL <= rowR) {
            const m = Math.floor((rowL + rowR) / 2);

            if (target > matrix[m][matrix[m].length - 1]) rowL = m + 1;
            else if (target < matrix[m][0]) rowR = m - 1;
            else {
                row = m;
                break;
            };
        }

        console.log(row)

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
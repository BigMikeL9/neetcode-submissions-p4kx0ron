class Solution {
    // Brute force solution would be to combine all arrays, then scan through then combined array
    // check if any num is equal to the target
    // Time Complexity would be O(n + n) or O(n)
    // Space Complexity would be O(n) for the combined array
    // where n is the number of numbers in the combined array


    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const combined = matrix.flat();

        for (const n of combined) {
            if (n === target) return true;
        }

        return false;
    }
}

class Solution {
    // Im going to use a hashset for O(1) lookups. As I scan through the array, I will check if 
    // the curr num has been seen, if so will return true
    // Time Complexity is O(n) where n is the length of nums
    // Space Complexity is O(m) where m is the number oif uniwue char and in worst case we store all num
    // in the hashset 

    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hashSet = new Set();

        for (const n of nums) {
            if (hashSet.has(n)) return true;
            hashSet.add(n);
        }

        console.log(hashSet);
        
        return false;
    }
}

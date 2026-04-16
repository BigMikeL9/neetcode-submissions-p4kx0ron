class Solution {
    // To figure the longest sequence we first need figure out if the current number is the start of 
    // sequence. We can do so by subtracting it by one and checking if the result exist in the array.
    // If it is, then add one to and keep scanning. Keeping track of the longext sequence.
    // To do so, I will use a hashSet for O(1) lookups
    // Time Complexity is O(n)
    // Space Complexity is O(n)
    // where n is the length of the nums array

    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length <= 0) return 0;
        var hashSet = new Set(nums);
        let streak = 1;

        console.log(hashSet)

        for (const n of hashSet) {
            const isStartOfSeq = !hashSet.has(n - 1);

            let j = 1;

            while (isStartOfSeq && hashSet.has(n + j)) {
                j++;
            }

            console.log(n, j, streak);

            streak = Math.max(j, streak);
        }

        return streak;
    }
}

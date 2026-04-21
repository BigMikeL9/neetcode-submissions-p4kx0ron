class Solution {
    // I will use a sliding window to get substring and then 
    // use a hashmap to get the frequency count of that 
    // substring. I will do so because we need to figure 
    // how many character we can replace in that substring
    // to have all distinct characters. 
    // And to do so we need to get the least freq character
    // in the curr substring which would be the size of the window
    // minus the most freq character. As long as char to replace
    // is less than or equal to k then we have valid window
    // which we can expand. Otherwise shift the window to the right.

    // Time Complexity would O(n)
    // Space Complexity would be O(m)
    // Where n is the length of the string and m is the number
    // of unique characters. 

    // Brute force would be to compare every char with every
    // other char in the string using a nested loop
    // That would be O(n^2) time complexity and O(1) space
    // complexity
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const hashMap = new Map();
        let res = 0;
        let l = 0;
        
        for (let r = 0; r < s.length; r++) {
            hashMap.set(s[r], (hashMap.get(s[r]) || 0) + 1);

            // invalid window
            while (r - l + 1 - Math.max(...hashMap.values()) > k) {
                hashMap.set(s[l], hashMap.get(s[l]) - 1);
                l++;
            }

            res = Math.max(res, r - l + 1);
        }

        return res;
    }
}

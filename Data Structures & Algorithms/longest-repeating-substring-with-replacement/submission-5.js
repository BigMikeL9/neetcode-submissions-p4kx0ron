class Solution {
    // I will use a sliding window algorithm where the condition to expand the window is if
    // the number of characters that can be replaced in the current substring is less than or equal to 
    // k. If that condition is not met, then I will shrink the window by moving the left pointer to the right
    // The characters that can be replaced are the least freuqnt character in the current window. To do 
    // so I will use a hashmap to store the frequency

    // Time Complexity would be O(26n) or O(n) where 26 is figuring out the least frequent characters
    // Space Complexity is O(n) where in worst case we store all characters in the hashmap

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

            // no of character that can be replaced
            const mostFreq = Math.max(...hashMap.values()); 
            console.log(hashMap, mostFreq);
            const leastFreq = (r - l + 1) - mostFreq;

            // window invalid
            if (leastFreq > k) {
                hashMap.set(s[l], hashMap.get(s[l]) - 1);
                l++;
            }

            res = Math.max(res, r - l + 1);
            console.log(res, hashMap);
        }

        return res;
    }
}

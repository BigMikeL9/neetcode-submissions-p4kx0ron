class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const hashSet = new Set();

        let res = 0;

        let l = 0;
        let r = 0;

        while (r < s.length) {
            if (!hashSet.has(s[r])) {
                hashSet.add(s[r])
                r++;
            } else {
                // shrink the window
                hashSet.delete(s[l])
                l++
            }

            // store current length of substring
            res = Math.max(res, r - l);
        }

        return res
    }
}

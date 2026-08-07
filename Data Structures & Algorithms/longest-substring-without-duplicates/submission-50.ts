class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const hashSet = new Set()
        let res = 0

        let l = 0

        for (let r = 0; r < s.length; r++) {
            // shrink the window
            while (hashSet.has(s[r])) {
                hashSet.delete(s[l])
                l++
            }

            hashSet.add(s[r])
            res = Math.max(res, r - l + 1)
        }

        return res
    }
}

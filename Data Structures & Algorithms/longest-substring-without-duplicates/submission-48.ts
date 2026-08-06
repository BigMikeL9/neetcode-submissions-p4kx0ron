class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        if (!s) return 0
        if (s.trim().length === 0) return 1
        const hashSet = new Set()
        let res = 0

        let l = 0
        for (let r = 0; r < s.length; r++) {

            while (l < r && hashSet.has(s[r])) {
                
                hashSet.delete(s[l])
                l++
            }

            res = Math.max(res, r - l + 1)
            hashSet.add(s[r])
        }

        return res
    }
}

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const hashSet = new Set()
        let res = 0

        // hashset = [ x, y]
        // l = 1
        // r = 3
        let l = 0
        for (let r = 0; r < s.length; r++) {

            // invalid window
            while (hashSet.has(s[r])) {
                hashSet.delete(s[l])
                l++
            }
            
            res = Math.max(res, r - l + 1)
            hashSet.add(s[r])
        }
        
        return res
    }
}

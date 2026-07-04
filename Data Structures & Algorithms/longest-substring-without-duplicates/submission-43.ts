class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let res = 0
        const hashSet = new Set()

        let l = 0
        let r = 0

        while (r < s.length) {
            // if seen char
            // shrink window and remove from hashSet
            // until window is valid
            while (l <= r && hashSet.has(s[r])) {
                hashSet.delete(s[l])
                l++
            }


            // valid window
            res = Math.max(res, r - l + 1)
            
            // expand widow
            hashSet.add(s[r])
            r++
            console.log(hashSet, res)
        }

        return res
    }
}

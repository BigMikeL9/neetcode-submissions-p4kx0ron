class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const freq = new Array(26).fill(null)
        let res = 0

        let l = 0
        
        const aCode = 'A'.charCodeAt(0)

        for (let r = 0; r < s.length; r++) {
            freq[s[r].charCodeAt(0) - aCode]++

            
            // invalid window
            // k = mostFreq - leastFreq
            while ((r - l + 1) - Math.max(...freq) > k) {
                freq[s[l].charCodeAt(0) - aCode]--
                l++
            }

            res = Math.max(res, r - l + 1)
        }

        return res
    }
}

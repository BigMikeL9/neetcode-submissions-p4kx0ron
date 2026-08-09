class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const count = new Array(26).fill(0)
        let res = 0

        const codeA = 'A'.charCodeAt(0)

        let l = 0
        for (let r = 0; r < s.length; r++) {
            count[s[r].charCodeAt(0) - codeA]++

            // winSize - mostFreq = leastFreq
            // leastFreq > k -> INVALID WINDOW

            while ((r - l + 1) - Math.max(...count) > k) {
                count[s[l].charCodeAt(0) - codeA]--
                l++
            }
            
            
            res = Math.max(res, r - l + 1)
        }

        return res
    }
}

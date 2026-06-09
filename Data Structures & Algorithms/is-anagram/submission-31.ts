class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const sCount = Array(26).fill(0);

        for (const c of s) {
            // 45 - 44 = 1
            sCount[c.charCodeAt(0) - 'a'.charCodeAt(0)]++
        }

        for (const c of t) {
            sCount[c.charCodeAt(0) - 'a'.charCodeAt(0)]--
        }

        console.log(sCount)
        return sCount.every(v => v === 0);
    }
}

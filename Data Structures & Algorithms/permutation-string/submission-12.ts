class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        const countS1 = new Array(26).fill(0)
        const countS2 = new Array(26).fill(0)

        const codeA = 'a'.charCodeAt(0)

        for (const c of s1) {
            countS1[c.charCodeAt(0) - codeA]++
        }

        let l = 0
        for (let r = 0; r < s2.length; r++) {
            countS2[s2[r].charCodeAt(0) - codeA]++

            if ((r - l + 1) === s1.length) {
                if (countS1.join('-') === countS2.join('-')) return true
                else {
                    countS2[s2[l].charCodeAt(0) - codeA]--
                    l++
                }
            }
        }

        return false
    }
}

class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        const getCount = (s: string) => {
            console.log({s})
            const count = new Array(26).fill(0)
            for (const c of s) {
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++
            }

            return count
        }

        const countS1 = getCount(s1)

        let l = 0
        let r = s1.length - 1

        while (r < s2.length) {

            const winCount = getCount(s2.slice(l, r + 1))
            if (winCount.join(',') === countS1.join(',')) return true

            // move the window
            r++    
            l++ 
        }

        return false
    }
}

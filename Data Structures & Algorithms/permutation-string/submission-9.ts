class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        const s1Count = Array(26).fill(0);
        const s2Count = Array(26).fill(0);
        
        const aBase = 'a'.charCodeAt(0);

        for (const c of s1) {
            s1Count[c.charCodeAt(0) - aBase]++;
        }

        let l = 0;
        for (let r = 0; r < s2.length; r++) {
            s2Count[s2[r].charCodeAt(0) - aBase]++;

            if ((r - l + 1) === s1.length) {
                console.log(s1Count.join(','), s2Count.join(','))
                if (s1Count.join(',') === s2Count.join(',')) return true;

                // shrink the window
                s2Count[s2[l].charCodeAt(0) - aBase]--;
                l++;
            }
        }
        
        return false;
    }
}

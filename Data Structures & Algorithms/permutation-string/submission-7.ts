class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        const s1Count = Array.from({ length: 26 }, (_, i) => 0);
        const s2Count = Array.from({ length: 26 }, (_, i) => 0);

        // s1 char freq
        for (const c of s1) {
            s1Count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++
        }

        // s2
        let l = 0;

        for (let r = 0; r < s2.length; r++) {
            console.log(s2[l], s2[r])
            s2Count[s2[r].charCodeAt(0) - 'a'.charCodeAt(0)]++

            // if window size is equal to s2 length
            // check char freq equality
            if (r - l + 1 === s1.length) {
                // check equality
                console.log(s1Count.toString(), '---', s2Count.toString())
                const equal = s1Count.toString() === s2Count.toString();
                if (equal) return true;
                s2Count[s2[l].charCodeAt(0) - 'a'.charCodeAt(0)]--
                l++
            }
        }

        return false;
    }
}

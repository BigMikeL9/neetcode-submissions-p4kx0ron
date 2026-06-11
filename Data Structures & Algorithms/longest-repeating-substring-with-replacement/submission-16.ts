class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const hashMap = new Map<string, number>();
        let res = 0;

        let l = 0;
        let mostFreq = 0;

        for (let r = 0; r < s.length; r++) {
            hashMap.set(s[r], (hashMap.get(s[r]) || 0) + 1);

            mostFreq = Math.max(mostFreq, hashMap.get(s[r]))

            // invalid window
            // store current length of window
            // and shrink the window until its valid
            while ((r - l + 1) - mostFreq > k) {
                hashMap.set(s[l], hashMap.get(s[l]) - 1);
                l++;
            }

            res = Math.max(res, r - l + 1);
        }

        return res;
    }
}

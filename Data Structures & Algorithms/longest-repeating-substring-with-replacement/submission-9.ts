class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const hashMap = new Map();
        let res = 0;
        let l = 0;
        let r = 0;

        while (r < s.length) {
            hashMap.set(s[r], (hashMap.get(s[r]) || 0) + 1);

            // is window is valid
            while ((r - l + 1 - Math.max(...hashMap.values())) > k) {
                if (hashMap.get(s[l]) > 0) hashMap.set(s[l], hashMap.get(s[l]) - 1)
                l++
            }

            console.log(hashMap, res)
            res = Math.max(res, r - l + 1)
            r++
        }

        return res
    }
}

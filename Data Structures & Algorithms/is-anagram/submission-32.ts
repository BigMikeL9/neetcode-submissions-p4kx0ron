class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const hashMap = new Map();

        for (const c of s) {
            hashMap.set(c, (hashMap.get(c) || 0) + 1)
        }

        for (const c of t) {
            hashMap.set(c, hashMap.get(c) - 1)
        }

        return [...hashMap.values()].every(v => v === 0)
    }
}

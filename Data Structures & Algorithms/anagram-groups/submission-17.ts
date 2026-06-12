class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const hashMap = new Map<string, string[]>();

        for (const s of strs) {
            const count = Array(26).fill(0);

            for (let i = 0; i < s.length; i++) {
                // b -> 45
                // a -> 44
                // 45 - 44 = 1
                count[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }

            const key = count.join(',');
            if (!hashMap.has(key)) hashMap.set(key, []);
            hashMap.get(key).push(s);
        }

        return [...hashMap.values()]
    }
}

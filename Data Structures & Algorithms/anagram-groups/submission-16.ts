class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const hashMap = new Map<string, string[]>();

        const aBase = 'a'.charCodeAt(0);

        for (const str of strs) {
            const count: number[] = Array(26).fill(0);

            for (const c of str) {
                console.log(c)
                count[c.charCodeAt(0) - aBase] += 1
            }

            const key = count.join(',');
            if (hashMap.has(key)) hashMap.get(key).push(str);
            else (hashMap.set(key, [str]))
        }

        return [...hashMap.values()]
    }
}

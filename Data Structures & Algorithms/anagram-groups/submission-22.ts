class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const hashMap = new Map()

        for (const s of strs) {
            const freq = new Array(26).fill(0)

            for (const c of s) {
                const indx = c.charCodeAt(0) - 'a'.charCodeAt(0);
                freq[indx]++
            }

            const key = freq.join('-')
            if (!hashMap.has(key)) hashMap.set(key, [])
            hashMap.get(key).push(s)
        }

        console.log(hashMap)
        return [...hashMap.values()]
    }
}

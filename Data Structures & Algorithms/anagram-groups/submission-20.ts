class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    // Time: O(n * k)
    // Space: O(n * k)
    // where n is the number of strings and k is the number of char in each string
    groupAnagrams(strs: string[]): string[][] {
        const hashMap = new Map()

        for (const s of strs) {
            const count = Array(26).fill(0) // constant space O(1) since fixed size array

            for (const c of s) {
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++
            }

            console.log(s)
            const key = count.join(',')
            if (!hashMap.has(key)) hashMap.set(key, [])
            hashMap.get(key).push(s)
        }

        console.log(hashMap)
        return [...hashMap.values()]
    }
}

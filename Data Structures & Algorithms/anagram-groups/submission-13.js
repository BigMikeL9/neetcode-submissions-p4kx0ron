class Solution {
    // We can get the character frequency of each string and use it to group its anagrams in a hashmap
    // Time Complexity would be O(3n) or O(n)
    // Space Complexitu would be O(m) where m is the number of anagram

    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        var hashMap = new Map();

        for (const s of strs) {
            const count = new Array(26).fill(0);
            
            for (const c of s) {
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }

            const key = count.join("|");

            if (!hashMap.has(key)) hashMap.set(key, []);
            hashMap.get(key).push(s);
        }

        console.log(hashMap);

        return [...hashMap.values()];
    }
}

class Solution {
    // I will use a sliding window with a fixed size of the length of s1. 
    // I will use a freq map to get the char freq of s1 and the curr substring. If they have the same 
    // freq, return true. If not, shift the window to the right.

    // Time Complexity is linear O(n)
    // Space Complexity is constant O(1) since I will be using a fixed size array of 26 because we're only 
    // dealing with lower case characters

    // Brute force solution to sort and compare s1 with every other substring in s2 to check for quality
    // Time Complexity would be O(n^2logn + mlogm) and Space Complexity would be O(n + m)
    // where n is the length of s1 and m is the length of s2

    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;
        const s1Count = Array.from({ length: 26 }, (_, i) => 0);
        const subStringCount = Array.from({ length: 26 }, (_, i) => 0);
        let l = 0;
        
        for (let i = 0; i < s1.length; i++) {
            s1Count[s1[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        for (let r = 0; r < s2.length; r++) {
            subStringCount[s2[r].charCodeAt(0) - 'a'.charCodeAt(0)]++;

            if (r - l + 1 === s1.length) {
                const sameCount = s1Count.join('') === subStringCount.join('');
                if (sameCount) return true;
                subStringCount[s2[l].charCodeAt(0) - 'a'.charCodeAt(0)]--;
                l++;
            }
        }

        return false;
    }
}



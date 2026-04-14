class Solution {
    // I will use a char frequency hashMap to check if the character count in s and t is the same
    // First I will check if both string have the same number of letters
    // Time Complexity will O(n + m) where n is the length of the string
    // Space Complexity would be O(k) where in worst case all characters are unique and we store all
    // in the hashMap

    // Brute force would be to sort each string and then check for equality

    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
       const count = {};

       for (let i = 0; i < s.length; i++) {
            count[s[i]] = (count[s[i]] || 0) + 1;
       }

       for (let c of t) {
            if (!count[c]) return false;
            count[c]--;
       }


        return true;
    }
}

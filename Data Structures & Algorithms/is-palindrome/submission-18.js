class Solution {
    // I will use a two pointer algorithm where the left pointer will start at the first element and 
    // the right pointer will start at the last element. As I scan through the string, I will check if 
    // the values at the pointers are equal. Ignoring non-alphanumeric values.

    // Time Complexity is O(n)
    // Space Complexity is O(1)

    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        const isLetterOrDigit = (char) => /^[a-zA-Z0-9]$/.test(char);

        while (l < r) {
            while (l < r && !isLetterOrDigit(s[l])) l++;
            while (l < r && !isLetterOrDigit(s[r])) r--;

            console.log(s[l], s[r]);

            if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
            
            l++;
            r--;
        }

        return true;
    }

}

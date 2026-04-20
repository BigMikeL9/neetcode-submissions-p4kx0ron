class Solution {
    // I will use a two pointer algorithmn along with a hashset
    // The left pointer will start at the first element and the second at the element after it
    // As I scan through the arra, I will check if the current values in the pointers have been seen
    // If they have, that means we have a duplicate char so I will store it size and increment the 
    // window by one. 
    // If we have not seen any of the values at the pointers, then I will expand the window. 

    // Time Complexity will be linear O(n + m)
    // Space complexity will be O(m)
    // Where n is the number of characters in the string and m is the number of unique char where in 
    // worst case all char are unique and we store all of them in the hashset

    // Brute force solution would be to compare current char with every other char using a nested loop
    // which will result in O(n^2) Time Complexity and constant or O(1) space complexity
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let hashSet = new Set();
        let res = 0;
        let l = 0;

        for (let r = 0; r < s.length; r++) {

            // invalid window - shrink window
            while (hashSet.has(s[r])) {
                console.log(hashSet)
                hashSet.delete(s[l]);
                l++;
            }

            hashSet.add(s[r]);
            res = Math.max(res, hashSet.size);
        }

        return res;
    }
}



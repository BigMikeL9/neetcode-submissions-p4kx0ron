class Solution {
    // I will use a hashMap to map each open parenthese to its closed parentehese.
    // Then I will a stack to check if the cur char is an open parenthese
    // If it is I iwll push it ot stack. 
    // If it is not, then I will pop that last inseterted element into the stack
    // and check if the curr char is its closing parenthese. If it is not then that means
    // we dont have a valid string. If it is, I will continue with the loop.

    // Time Complexity would be O(n)
    // Space Complexity would be O(m)
    // where n is the length of the string and m is the number of open and closing parenthese stored in the hashMap 

    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const hashMap = new Map([['(', ')'], ['{', '}'], ['[', ']']]);
        const res = [];

        for (const c of s){
            if (hashMap.has(c)) res.push(c);
            else {
                console.log(res)
                const last = res.pop();
                console.log(c, last);
                if (hashMap.get(last) !== c) return false;
            }
        }

        console.log(res)
        return res.length > 0 ? false : true;
    }
}

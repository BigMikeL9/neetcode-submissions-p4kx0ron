class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const hashMap = new Map([['(', ')'], ['{', '}'], ['[', ']']])
        const stack = [];

        for (const c of s) {
            if (hashMap.has(c)) stack.push(c);
            else {
                const popped = stack.pop();
                console.log(popped)
                if (hashMap.get(popped) !== c) return false;
            } 
        }

        return stack.length === 0;
    }
}

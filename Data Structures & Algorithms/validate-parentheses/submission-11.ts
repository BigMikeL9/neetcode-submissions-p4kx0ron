class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isValid(s: string): boolean {        
        const hashMap = new Map([['(', ')'], ['{', '}'], ['[', ']']]);
        const stack = [];

        for (const c of s) {
            if (hashMap.has(c)) stack.push(c);
            else {
                const popped = stack.pop(); // '{' 
                // c = '}'
                if (hashMap.get(popped) !== c) return false;
            }
        }

        return stack.length === 0;
    }
}

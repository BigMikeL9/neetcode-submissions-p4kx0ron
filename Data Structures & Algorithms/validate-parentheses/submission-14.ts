class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const hashMap = new Map([[')', '('], ['}', '{'], [']', '[']])
        const stack = [] // LIFO

        // "([{}])"
        for (const p of s) {
            if (hashMap.has(p)) {
                const popped = stack.pop()

                if (hashMap.get(p) !== popped) return false
                continue
            }

            stack.push(p)
        }
        
        return stack.length === 0
    }
}

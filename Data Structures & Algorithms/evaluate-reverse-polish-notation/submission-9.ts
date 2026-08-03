class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const operators = new Set(['+', '-', '*', '/'])
        const stack = []

        for (const t of tokens) {
            if (!operators.has(t)) stack.push(Number(t))
            else {
                let res = 0;
                const last = stack.pop()
                const first = stack.pop()

                if (t === '+') res = first + last
                else if (t === '-') res = first - last
                else if (t === '*') res = first * last
                else res = Math.trunc(first / last)

                stack.push(res)
            }
        }

        return stack[stack.length - 1]
    }
}

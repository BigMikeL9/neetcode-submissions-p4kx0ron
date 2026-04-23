class Solution {
    // We can use a hashset to store the operators for O(1) lookups. And then we can use 
    // a stack to store strings representing integers until we reach an operator.
    // In which case we pop that last two items in the stack which will be treated as operands
    // and perform the calculation then push the value to the stack
    // The reason why poping the last two elements from the stack work is because the Reverse 
    // Polish notation works is that the operands or numbers are followed by the operator, in other 
    // words it goes from left to right

    // Time Complexity would O(n) where n is the number of tokens. Poping an element from the stack does 
    // not add to the complexity since its constant O(1)
    // Space Complexity is O(n) for the allocated memory for the stack
    // HashSet has constant space complexity O(1) since it has a fixed size
    

    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const hashSet = new Set(['+', '-', '*', '/']);
        const stack = [];

        for (const t of tokens) {
            if (!hashSet.has(t)) stack.push(t);
            else {
                // pop the last two token
                const last = +stack.pop();
                const first = +stack.pop();
                let val = 0;
                
                // perform the calculation
                if (t === '+') val = first + last;
                if (t === '-') val = first - last;
                if (t === '*') val = first * last;
                if (t === '/') val = Math.trunc(first / last);

                stack.push(val);
            }
        }

        return stack.pop();
    }
}

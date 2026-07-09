// we can recursively build a decision tree where the left branch includes open parenthesis and the right branch
// closing parenthese. After every recursive call, we backtrack to try different combinations. 
// Base case to include a subset in our output would be when the number of open and closing parentheses are equal to n

// Time Complexity would be O(number of combinations * n)
// Space Complexity would be O(n) excluding output

class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n: number): string[] {
        const res = []

        const dfs = (subset: string[], open: number, close: number) => {
            // base case
            if (open === close && open === n) {
                res.push([...subset].join('')) // O(n)
                return
            }

            // left. explore all cmbinations with '('
            if (open < n) {
                subset.push('(')
                dfs(subset, open + 1, close)
                subset.pop()
            }

            // right. explore all combinations with ')'
            if (open > close) {
                subset.push(')')
                dfs(subset, open, close + 1)
                subset.pop()
            }
        }

        dfs([], 0, 0)
        return res
    }
}

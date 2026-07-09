class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n: number): string[] {
        let res = []

        const dfs = (
                subset: string[], 
                openParen: number, 
                closeParen: number, 
                branch?: 'left' | 'right'
                ) => {
            // base case 
            if (openParen === closeParen && openParen === n) {
                res.push([...subset].join(''))
                return
            }

            console.log({subset, openParen, closeParen, branch})
            
            // left branch. add '('
            if (openParen < n) {
                subset.push('(')
                dfs(subset, openParen + 1, closeParen, 'left')
                subset.pop()
            }

            // console.log('AFTER', {subset, openParen, closeParen})
            // right branch. add ')'
            if (openParen > closeParen) {
                subset.push(')')
                dfs(subset, openParen, closeParen + 1, 'right')
                subset.pop()
            }
        }

        dfs([], 0, 0)
        return res
    }
}

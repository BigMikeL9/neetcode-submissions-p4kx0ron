// create a hashmap where we map the nums to their corresponding letters
// use recursive backtracking to create a decision tree. each root is going to have child ancestor 
// representing the letters mapped to each num. 
// Once our curr subset is the same size as the digits string, we push a copy of it to a res variable

// Time Complexity O(n * k^n)
// Space Complexity would be O(n * k^n)
// where k is the num of letters mapped to each num, and n is the number of digits in the digits string

class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits: string): string[] {
        const hashMap = new Map([
            ['2', ['a', 'b', 'c']],
            ['3', ['d', 'e', 'f']],
            ['4', ['g', 'h', 'i']],
            ['5', ['j', 'k', 'l']],
            ['6', ['m', 'n', 'o']],
            ['7', ['p', 'q', 'r', 's']],
            ['8', ['t', 'u', 'v']],
            ['9', ['w', 'x', 'y', 'z']]
        ])

        const res = []

        const dfs = (i: number, subset: string[]) => {
            // base case 
            if (digits.length === subset.length) {
                res.push(subset.join(''))
                return 
            }

            const letters = hashMap.get(digits[i])

            // create branches
            for (const l of letters) {
                subset.push(l)
                dfs(i + 1, subset)
                subset.pop()
            }
        }

        if (digits.length > 0) dfs(0, [])
        return res
    }
}

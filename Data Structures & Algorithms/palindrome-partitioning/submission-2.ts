// we can use recursive backtracking to partition and check if every partitions string is a palindrom. 
// If it is push it onto a res output
// Time Complexity would be O(n * 2^n) 
// Spcae Complexity would be O(n * 2^n) for the recursive callstack and creating a copy of our subset before pushing it to the 
// output

class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s: string): string[][] {
        let res = []

        const dfs = (i: number, subset: string[]) => {
            // base case
            // if we reach the end of the word
            if (i === s.length) {
                res.push([...subset]) // O(n)
                return
            }

            // i = 0; j = 0 -> [a]
            // i = 0; j = 1 -> [a, b]
            // i = 0; j = 2

            for (let j = i; j < s.length; j++) {
                const substring = s.slice(i, j + 1)
                if (this.isPalindrome(substring)) {
                    subset.push(substring)
                    dfs(j + 1, subset)
                    subset.pop()
                }
            }
        }

        dfs(0, [])
        return res
    }

    isPalindrome(s: string) {
        let l = 0
        let r = s.length - 1

        while (l <= r) {
            if (s[l] !== s[r]) return false

            l++
            r--
        }

        return true
    }
}

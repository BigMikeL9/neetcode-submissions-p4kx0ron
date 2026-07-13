class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s: string): string[][] {
        const res = []

        const dfs = (i: number, subset: string[]) => {
            // base case 
            if (i === s.length) {
                res.push([...subset])
                return
            }

            // i = 0; j = 0 => [a]
            // i: 1; j = 1 => [a, b]
            // i: 2; j = 2 => [a, b, c]

            // i = 0; j = 1 => [aa]
            // i = 

            // i = 2; j = 2 => [aa, b]

            for (let j = i; j < s.length; j++) {
                const substring = s.slice(i, j + 1)
                    console.log({ i, j, substring })
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

    isPalindrome(s: string): boolean {
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

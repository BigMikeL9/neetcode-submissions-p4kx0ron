class Solution:
    def countSubstrings(self, s: str) -> int:
        # expand from center. even and odd
        res = 0

        def expand(l, r):
            nonlocal res
            while l >= 0 and r < len(s) and s[l] == s[r]:
                res += 1

                l -= 1
                r += 1


        for i in range(len(s)):
            # even
            expand(i, i)
            
            # odd
            expand(i, i + 1)

        return res
            
                

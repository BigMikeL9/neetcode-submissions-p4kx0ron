class Solution:
    def longestPalindrome(self, s: str) -> str:
        # expand from center
        # account for even and odd palindromes

        res = ""

        # O(n)
        def get_palindrome(l, r):
            nonlocal res
            while l >= 0 and r < len(s) and s[l] == s[r]:
                if len(res) < r - l + 1:
                    res = s[l: r + 1] # O(n) space
                
                l -= 1
                r += 1

        # O(n)
        for i in range(len(s)):
            # odd
            l = i
            r = i
            get_palindrome(l, r)
            
            # even
            l = i
            r = i + 1
            get_palindrome(l, r)

        return res

        # Time O(n^2)
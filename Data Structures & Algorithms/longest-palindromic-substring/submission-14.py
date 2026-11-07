class Solution:
    def longestPalindrome(self, s: str) -> str:
        res = s[0] if len(s) > 0 else ""

        for i in range(len(s)):
            l = i - 1
            r = i + 1

            while l >= 0 and s[i] == s[l]:
                if len(res) < l - i + 1:
                    res = s[l:i + 1]    
                
                l -= 1
            
            while r < len(s) and s[i] == s[r]:
                if len(res) < r - i + 1:
                    res = s[i:r + 1]
                
                r += 1

            while l >= 0 and r < len(s) and s[l] == s[r]:
                if len(res) < r - l + 1:
                    res = s[l:r + 1]

                l -= 1
                r += 1
            
        return res

            

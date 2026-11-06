class Solution:
    def isPalindrome(self, s: str) -> bool:
        l = 0
        r = len(s) - 1

        while l < r:
            while not str.isalnum(s[l]) and l < len(s) - 1:
                l += 1

            while not str.isalnum(s[r]) and r > -1:
                r -= 1

            if s[l].lower() != s[r].lower():
                return False

            l += 1
            r -= 1
        
        return True
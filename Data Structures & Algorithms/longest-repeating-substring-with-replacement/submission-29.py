class Solution:
    def characterReplacement(self, s: str, k: int) -> int:

        res = 0
        ASCII_A = ord('A')
        char_count = [0] * 26
        l = 0 

        for r in range(len(s)):
            # update char freq
            char_count[ord(s[r]) - ASCII_A] += 1

            # validate valid window
            # least freq chars = size of substring - least freq chars
            while (r - l + 1) - max(char_count) > k:
                char_count[ord(s[l]) - ASCII_A] -= 1
                l += 1
            
            res = max(res, r - l + 1)

        return res

        # Time: O(n)
        # Space: O(1)

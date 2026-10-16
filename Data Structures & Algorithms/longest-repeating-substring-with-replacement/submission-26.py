class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        char_count = [0] * 26
        l = 0
        res = 0

        char_code_a = ord('A')

        for r in range(len(s)):
            char_count[ord(s[r]) - char_code_a] += 1
            
            # invalid window
            # least freq = window size - most freq
            while (r - l + 1) - max(char_count) > k:
                char_count[ord(s[l]) - char_code_a] -= 1
                l += 1

            res = max(res, r - l + 1)

        return res
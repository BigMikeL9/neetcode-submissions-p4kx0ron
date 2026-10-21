class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        count = [0] * 26
        res = 0
        l = 0

        code_a = ord('A')
        
        for r in range(len(s)):
            # 120 - 100 = 20
            count[ord(s[r]) - code_a] += 1

            # least_num_char = size_of_window - max_char_freq
            while (r - l + 1) - max(count) > k:
                count[ord(s[l]) - code_a] -= 1
                l += 1
            
            res = max(res, r - l + 1)

        return res

        
class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        if len(s1) > len(s2) or s1 == "":
            return False

        char_code_a = ord('a')

        # get char count of s1
        char_count_s1 = [0] * 26
        for c in s1:
            char_count_s1[ord(c) - char_code_a] += 1

        # get char count of chars inside fixed window
        l = 0
        char_count_win = [0] * 26
        for r in range(len(s2)):
            char_count_win[ord(s2[r]) - char_code_a] += 1

            if r - l + 1 == len(s1):
                if tuple(char_count_s1) == tuple(char_count_win):
                    return True
                else:
                    # shrink the window
                    char_count_win[ord(s2[l]) - char_code_a] -= 1
                    l += 1

        return False

        # Time: O(n + m)
        # Space: O(26) -> O(1)
        # where n is number of characters in s1 and m in s2
                    
            



        
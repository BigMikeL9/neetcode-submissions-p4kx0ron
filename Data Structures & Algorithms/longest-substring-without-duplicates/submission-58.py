class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if len(s) == 0:
            return 0
        
        hashset = set()
        res = 0

        l = 0
        r = 0

        while r <= len(s) - 1:
            # if window is not valid, shrink
            while l <= r and r < len(s) and s[r] in hashset:
                hashset.remove(s[l])
                l += 1

            hashset.add(s[r])
            r += 1
            
            res = max(res, len(hashset))

        return res
        


            
            
        

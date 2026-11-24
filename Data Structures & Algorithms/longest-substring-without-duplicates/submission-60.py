class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if len(s) == 0:
            return 0
        
        hashset = set()
        res = 0

        l = 0
        r = 0

        for r in range(len(s)):
            while s[r] in hashset:
                hashset.remove(s[l])
                l += 1

            hashset.add(s[r])
            res = max(res, len(hashset))

        return res

        # Time: O(n)
        # Space: O(n)
        


            
            
        

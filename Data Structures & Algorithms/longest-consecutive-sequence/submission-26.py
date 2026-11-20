class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if len(nums) == 0:
            return 0
        hashset = set(nums)
        res = 1

        for n in nums:
            # start of a seq
            if n - 1 not in hashset:
                curr = n + 1
                count = 1
                while curr in hashset:
                    count += 1
                    curr += 1
                
                res = max(res, count)
        
        return res

        # Time: O(n)
        # Space: O(n)
        # where is the number of elements in the nums arr
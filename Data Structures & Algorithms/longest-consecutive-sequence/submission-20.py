class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        hashset = set(nums)
        res = 0

        for n in nums:
            # start of seq
            if n - 1 in hashset: 
                continue
            
            counter = 1

            curr = n + 1
            while curr in hashset:
                counter += 1
                curr += 1

            res = max(res, counter)

        return res
            

        
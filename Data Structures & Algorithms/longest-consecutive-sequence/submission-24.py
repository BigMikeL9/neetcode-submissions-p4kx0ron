class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if len(nums) == 0:
            return 0
        hashset = set(nums)
        res = 1

        for i in range(len(nums)):
            curr_num = nums[i]
            counter = 1

            # not start of a seq
            if curr_num - 1 in hashset:
                continue

            while curr_num + 1 in hashset:
                counter += 1
                curr_num += 1

            res = max(res, counter)

        return res

    
        # Time: O(n)
        # Space: O(n) for the hashset
        # where n is the size of nums

        
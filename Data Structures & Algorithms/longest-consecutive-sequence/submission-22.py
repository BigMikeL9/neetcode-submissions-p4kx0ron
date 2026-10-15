class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if len(nums) == 0:
            return 0
        hashset = set(nums)
        res = 1

        # 6
        # 0
        for i in range(len(nums)):
            curr_num = nums[i]
            length = 1

            # not start of a seq
            if curr_num - 1 in hashset:
                continue

            while curr_num + 1 in hashset:
                length += 1
                curr_num += 1

            res = max(res, length)

        return res

    
        # Time: O(n)
        # Space: O(n) for the hashset
        # where n is the size of nums

        
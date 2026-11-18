class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        res = []
        
        # [1, 2, 4, 6]
        # [1] -> prefix = 1
        # [1, 1] -> prefix = 2
        # [1, 1, 2] -> prefix = 8
        # [1, 1, 2, 8] -> prefix = 48
        prefix_arr = []
        prefix = 1
        for n in nums:
            res.append(prefix)
            prefix *= n

        # right to left, product of nums after current num
        # [1] -> suffix = 6
        # [1, 6] -> suffix = 24
        # [1, 6, 24] -> suffix = 48
        # [1, 6, 24, 48] -> suffix = 48
        suffix_arr = []
        suffix = 1
        for i in range(len(nums) - 1, -1, -1):
            res[i] *= suffix
            suffix *= nums[i]

        return res

        # Time: O(n)
        # Space: O(1)

        

            

        
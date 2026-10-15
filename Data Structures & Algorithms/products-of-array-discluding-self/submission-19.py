class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        arr = []

        # [1,2,4,6]
        # [1, ] -> prefix = 1
        # [1, 1, ] -> prefix = 2
        # [1, 1, 2, ] -> prefix = 8
        # [1, 1, 2, 8] -> prefix = 48
        prefix_arr = []
        prefix = 1
        for n in nums:
            prefix_arr.append(prefix)
            prefix *= n
        
        suffix_arr = []
        suffix = 1
        for i in range(len(nums) - 1, -1 , -1):
            suffix_arr.append(suffix)
            suffix *= nums[i]

        suffix_arr.reverse()

        for i in range(len(nums)):
            arr.append(suffix_arr[i] * prefix_arr[i])

        return arr
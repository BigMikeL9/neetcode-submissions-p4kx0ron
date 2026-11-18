class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        
        # [1, 2, 4, 6]
        # [1] -> prefix = 1
        # [1, 1] -> prefix = 2
        # [1, 1, 2] -> prefix = 8
        # [1, 1, 2, 8] -> prefix = 48
        prefix_arr = []
        prefix = 1
        for n in nums:
            prefix_arr.append(prefix)
            prefix *= n

        # right to left, product of nums after current num
        # [1] -> suffix = 6
        # [1, 6] -> suffix = 24
        # [1, 6, 24] -> suffix = 48
        # [1, 6, 24, 48] -> suffix = 48
        suffix_arr = []
        suffix = 1
        for i in range(len(nums) - 1, -1, -1):
            suffix_arr.append(suffix)
            suffix *= nums[i]

        # reverse because we want to get the product of nums after current num
        suffix_arr.reverse()

        res = []
        for i in range(len(nums)):
            res.append(prefix_arr[i] * suffix_arr[i])

        return res

        # Time: O(n)
        # Space: O(n)

        

            

        
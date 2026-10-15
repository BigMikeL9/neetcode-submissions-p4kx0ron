class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        res = set()

        # [-4, -1, -1, 0, 1, 2]
        #   i   j            k
        for i in range(len(nums)):
            if i != 0 and nums[i - 1] == nums[i]:
                continue

            l = i + 1
            r = len(nums) - 1

            while l < r:
                curr_sum = nums[i] + nums[l] + nums[r]

                if curr_sum < 0:
                    l += 1
                elif curr_sum > 0:
                    r -= 1
                else:
                    res.add((nums[i], nums[l], nums[r]))
                    l += 1
                    r -= 1
                    # aviod duplicates
                    #while l < r and nums[l] == nums[l - 1]:
                    #    l += 1

        return list(res)

        # Time: O(nlogn) + O(n^2) -> O(n^2) because visit every num more than once
        # Space: O(n) sorting nums in worst case
        # where n is the size of nums


        
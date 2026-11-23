class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        hashset = set()

        for i in range(len(nums)):
            # if duplicate consecutive nums -> skip
            if i != 0 and nums[i - 1] == nums[i]:
                continue

            # sliding window
            l = i + 1
            r = len(nums) - 1

            while l < r:
                curr_sum = nums[i] + nums[l] + nums[r]

                if curr_sum > 0:
                    r -= 1
                elif curr_sum < 0:
                    l += 1
                else:
                    if (nums[i], nums[l], nums[r]) not in hashset:
                        hashset.add((nums[i], nums[l], nums[r]))
                    l += 1
                    r -= 1

        print(hashset)
        return list(hashset)





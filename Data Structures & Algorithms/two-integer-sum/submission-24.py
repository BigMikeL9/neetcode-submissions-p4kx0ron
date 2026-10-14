class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashmap = {}

        for i in range(len(nums)):
            lookup = target - nums[i]

            if lookup in hashmap:
                return [hashmap[lookup], i]
            
            hashmap[nums[i]] = i


        
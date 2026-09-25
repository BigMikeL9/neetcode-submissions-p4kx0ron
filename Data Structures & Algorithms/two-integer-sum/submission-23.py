class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashmap = defaultdict(int)

        for i, n in enumerate(nums):
            res = target - n

            if res in hashmap:
                return [hashmap[res], i]

            hashmap[n] = i
        
        return -1
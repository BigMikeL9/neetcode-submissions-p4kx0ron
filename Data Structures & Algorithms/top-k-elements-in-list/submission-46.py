class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        hashmap = {nums[i]: 0 for i in range(len(nums))}
        min_heap = []
        res = []

        # get char count
        for n in nums:
            hashmap[n] += 1
        
        # add to min-heap
        for num, v in hashmap.items():
            heapq.heappush(min_heap, (-v, num))

        # get k freq elements
        while len(res) != k:
            count, num = heapq.heappop(min_heap)
            res.append(num)

        return res

        
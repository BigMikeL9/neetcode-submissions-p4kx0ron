class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        hashmap = {nums[i]: 0 for i in range(len(nums))}
        min_heap = []

        # get char count
        for n in nums:
            hashmap[n] += 1
        
        # add to min-heap
        for num, v in hashmap.items():
            heapq.heappush(min_heap, (v, num))

            if len(min_heap) > k:
                heapq.heappop(min_heap)
        
        return [num for freq, num in min_heap]

        
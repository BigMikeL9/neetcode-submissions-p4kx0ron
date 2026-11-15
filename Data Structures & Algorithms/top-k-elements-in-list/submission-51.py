class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        hashmap = defaultdict(int)
        min_heap = []

        # get freq count
        for i in range(len(nums)):
            hashmap[nums[i]] += 1
        
        # add k element to the heap
        for key, val in hashmap.items():
            heapq.heappush(min_heap, [val, key])
            
            # {1: -3, 2: -2, 3: -1}
            if len(min_heap) > k:
                heapq.heappop(min_heap)

        return [key for val, key in min_heap]

        
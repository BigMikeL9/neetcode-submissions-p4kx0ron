class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        hashmap = defaultdict(int)
        min_heap = [] # [count, num]

        for n in nums:
            hashmap[n] += 1

        for key, val in hashmap.items():
            heapq.heappush(min_heap, (val, key))

            if len(min_heap) > k:
                heapq.heappop(min_heap)

        print(min_heap)
        return [key for val, key in min_heap]
        
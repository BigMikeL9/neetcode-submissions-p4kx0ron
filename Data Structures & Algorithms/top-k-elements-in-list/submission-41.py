class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        hashmap = defaultdict(int)
        min_heap = []

        # get freq
        for n in nums:
            hashmap[n] += 1

        # add k number of elements to the queue
        for key, val in hashmap.items():
            heapq.heappush(min_heap, (val, key))

            # maintain k number of elements in the heap
            if len(min_heap) > k:
                heapq.heappop(min_heap)


        res = []
        for freq, n in min_heap:
            res.append(n)

        return res
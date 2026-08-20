class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        hashmap = defaultdict(int)
        heap = []
        res = []

        for n in nums:
            hashmap[n] += 1

        for key, val in hashmap.items():
            heapq.heappush(heap, (val, key))
            if len(heap) > k:
                heapq.heappop(heap)

        for i in range(len(heap) - 1, -1, -1):
            res.append(heap[i][1])

        return res

        # Time: O(nlogk)
        # Space: O(nlogk)


        
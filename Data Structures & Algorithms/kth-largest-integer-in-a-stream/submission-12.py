class KthLargest:

    def __init__(self, k: int, nums: List[int]):
        self.k = k
        self.min_heap = []

        # maintain k size heap
        for n in nums:
            heapq.heappush(self.min_heap, n)

            if len(self.min_heap) > self.k:
                heapq.heappop(self.min_heap)
        

    # [1, 2, 3, 3, 3, 5, 6, 7]
    def add(self, val: int) -> int:
        heapq.heappush(self.min_heap, val)

        if len(self.min_heap) > self.k:
            heapq.heappop(self.min_heap)

        print(self.min_heap)

        return self.min_heap[0]




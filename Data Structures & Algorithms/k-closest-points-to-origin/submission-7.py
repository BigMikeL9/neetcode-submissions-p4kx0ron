class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        max_heap = []

        for x, y in points:
            dist = math.sqrt(x ** 2 + y ** 2)
            heapq.heappush(max_heap, (-dist, [x, y]))

            # maintain k size heap
            # remove largest el in the
            if len(max_heap) > k:
                heapq.heappop(max_heap)

        return [item[1] for item in max_heap]

        # Time: O(n log k)
        # Space: O(k)   
        
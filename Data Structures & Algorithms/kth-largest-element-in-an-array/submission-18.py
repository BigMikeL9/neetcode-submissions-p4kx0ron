class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        min_heap = nums
        
        heapq.heapify(min_heap)

        while len(min_heap) > k:
            heapq.heappop(min_heap)

        return min_heap[0]

        # Time: O(n + (n - k)logn)
        # Space: O(k)

        # heapq.heapify(nums) -> O(n)
        # n - k calls to heappop() -> O((n − k) log n)
        
        
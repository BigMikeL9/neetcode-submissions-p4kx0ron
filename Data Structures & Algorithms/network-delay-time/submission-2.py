class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        N = range(n + 1)
        graph = {i: [] for i in N}
        min_heap = [(0, k)]
        visited = set()
        res = 0

        # create adj list
        for u, v, t in times:
            graph[u].append((t, v))

        while min_heap:
            t1, v1 = heapq.heappop(min_heap)

            if v1 in visited:
                continue

            visited.add(v1)
            res = t1

            for t2, v2 in graph[v1]:
                heapq.heappush(min_heap, (t1 + t2, v2))

        return res if len(visited) == n else -1

        # Time: O(n)
        # SpaceL O(n)


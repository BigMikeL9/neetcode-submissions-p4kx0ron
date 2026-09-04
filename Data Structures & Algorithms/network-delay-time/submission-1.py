class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        graph = {i: [] for i in range(n + 1)}
        min_heap = [(0, k)]
        visited = set()

        for u, v, t in times:
            graph[u].append((v, t))

        print(graph)
        res = 0

        while len(min_heap):
            t, v = heapq.heappop(min_heap)

            if v in visited:
                continue

            visited.add(v)
            res = t

            for v1, t1 in graph[v]:
                heapq.heappush(min_heap, (t + t1, v1))

        return res if len(visited) == n else -1
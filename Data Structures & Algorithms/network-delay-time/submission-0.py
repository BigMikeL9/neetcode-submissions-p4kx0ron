class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        graph = {i: [] for i in range(n + 1)}
        min_heap = [(0, k)]
        visited = set()
        res = 0

        for u, v, t in times:
            graph[u].append((v, t))

        while min_heap:
            t, u = heapq.heappop(min_heap)

            if u in visited:
                continue

            visited.add(u)
            res = t

            for v1, t1 in graph[u]:
                heapq.heappush(min_heap, (t + t1, v1))

        print(res)
        return res if len(visited) == n else -1
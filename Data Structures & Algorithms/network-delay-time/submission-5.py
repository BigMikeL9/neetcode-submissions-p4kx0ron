class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        graph = {i: [] for i in range(n + 1)}

        for u, v, t in times:
            graph[u].append((t, v))

        min_heap = [(0, k)] # (time, target node)
        visited = set() # detect cycle
        res = 0
        
        while min_heap:
            t, v = heapq.heappop(min_heap)

            if v in visited:
                continue

            visited.add(v)
            res = t

            for t2, v2 in graph[v]:
                heapq.heappush(min_heap, (t + t2, v2))

        return res if len(visited) == n else -1
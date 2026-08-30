class Solution:
    def minCostConnectPoints(self, points: List[List[int]]) -> int:
        N = len(points)
        graph = {i: [] for i in range(N)}

        for i in range(N):
            x1, y1 = points[i]
            for j in range(i + 1, N):
                x2, y2 = points[j]
                dist = abs(x1 - x2) + abs(y1 - y2)
                # undirected graph
                graph[i].append((dist, j))
                graph[j].append((dist, i))
        
        # prim's algo
        res = 0
        min_heap = [(0, 0)]
        visited = set()

        while len(visited) < N:
            dist, node = heapq.heappop(min_heap)

            if node in visited:
                continue
            
            visited.add(node)
            res += dist

            for nei in graph[node]:
                if nei not in visited:
                    heapq.heappush(min_heap, nei)

        return res

        
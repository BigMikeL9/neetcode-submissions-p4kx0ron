class Solution:
    def minCostConnectPoints(self, points: List[List[int]]) -> int:
        N = len(points)
        graph = {i: [] for i in range(N)}

        for i in range(N):
            x1, y1 = points[i]
            for j in range(i + 1, N):
                x2, y2 = points[j]
                dist = abs(x1 - x2) + abs(y1 - y2)
                graph[i].append((dist, j))
                graph[j].append((dist, i))

        res = 0
        min_heap = [(0, 0)]
        visited = set()

        while len(visited) < N:
            dist, y = heapq.heappop(min_heap)

            # already stored the min dist of this point
            if y in visited:
                continue

            visited.add(y)
            res += dist
            
            for nei in graph[y]:
                heapq.heappush(min_heap, nei)
            
        return res

        # Time: O(n^2) + O(n logn) -> O(n^2logn)
        # Space: O(n^2)
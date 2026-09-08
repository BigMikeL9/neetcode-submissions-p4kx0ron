class Solution:
    def swimInWater(self, grid: List[List[int]]) -> int:
        ROWS = len(grid)
        COLS = len(grid[0])
        
        min_heap = [(grid[0][0], 0, 0)]
        visited = set()

        coordinates = [[-1, 0], [1, 0], [0, 1], [0, -1]]

        while min_heap:
            # print(min_heap, ROWS, COLS)
            t, r, c = heapq.heappop(min_heap)

            if (r, c) in visited: 
                continue

            visited.add((r, c))

            if r == ROWS - 1 and c == COLS - 1:
                return t

            # check if out of bounds before pushing to the heap
            for x, y in coordinates:
                nr = r + x
                nc = c + y
                if nr < 0 or nc < 0 or nr > ROWS - 1 or nc > COLS - 1:
                    continue
                heapq.heappush(min_heap, (max(t, grid[nr][nc]), nr, nc))

        return 0
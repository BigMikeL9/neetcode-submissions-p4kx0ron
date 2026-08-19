class Solution:
    def countComponents(self, n: int, edges: List[List[int]]) -> int:
        graph = {i: [] for i in range(n)}
        visited = set()
        res = 0

        for a, b in edges:
            graph[a].append(b)
            graph[b].append(a)

        # recursively mark visited nodes

        # {
        #   0: [1]
        #   1: [0, 1, 2]
        #   2: [1]
        #   3: [4]
        #   4: [3]
        # }
        
        def dfs(node):
            if node in visited:
                return

            visited.add(node)
            
            for n in graph[node]:
                dfs(n)
            
        for i in range(n):
            if i not in visited:
               res += 1
               dfs(i)

        return res 


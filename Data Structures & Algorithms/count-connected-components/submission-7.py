class Solution:
    def countComponents(self, n: int, edges: List[List[int]]) -> int:
        adjList = {i: [] for i in range(n)}
        visited = set()
        res = 0

        for a, b in edges:
            adjList[a].append(b)
            adjList[b].append(a)

        def dfs(node):
            if node in visited:
                return node
            
            visited.add(node)

            for n in adjList[node]:
                dfs(n)

            return node
 
        for i in range(n):
            if i not in visited:
                res += 1
                dfs(i)

        return res
        
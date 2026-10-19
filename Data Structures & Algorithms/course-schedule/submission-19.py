class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        adjList = {i: [] for i in range(numCourses)}
        visiting = set() # detects cycles
        visited = set() # tracks completed cycles

        for a, b in prerequisites:
            adjList[a].append(b)

        def dfs(node):
            # cycle detected
            if node in visiting:
                return False

            if node in visited:
                return True

            visiting.add(node)

            for c in adjList[node]:
                if not dfs(c):
                    return False
            
            visiting.remove(node)
            visited.add(node)

            return True

        for i in range(numCourses):
            if not dfs(i):
                return False

        return True if len(visited) == numCourses else False


        
class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        adjList = {i: [] for i in range(numCourses)}
        visiting = set()
        completed = set()
        res = []

        for a, b in prerequisites:
            adjList[a].append(b)

        def dfs(course):
            if course in visiting:
                return False
            
            if course in completed:
                return True

            visiting.add(course)

            for c in adjList[course]:
                if not dfs(c):
                    return False

            visiting.remove(course)
            completed.add(course)
            res.append(course)

            return True

        for i in range(numCourses):
            if not dfs(i):
                return []

        return res if len(res) == numCourses else []
        
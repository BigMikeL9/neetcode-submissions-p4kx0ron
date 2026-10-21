class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        adjList = {i: [] for i in range(numCourses)}
        visiting = set()
        completed = set()

        for c, p in prerequisites:
            adjList[c].append(p)

        def dfs(course):
            if course in visiting:
                return False
            
            if course in completed:
                return True

            visiting.add(course)

            for pre in adjList[course]:
                if not dfs(pre):
                    return False

            visiting.remove(course)
            completed.add(course)

            return True

        for c in range(numCourses):
            if not dfs(c):
                return False

        return True

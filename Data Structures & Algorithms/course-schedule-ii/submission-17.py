class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        adjList = {i: [] for i in range(numCourses)}
        visiting: set[int] = set()
        completed: set[int] = set()
        res: list[int] = []

        for c, p in prerequisites:
            adjList[c].append(p)

        def dfs(course: int) -> bool:
            if course in completed: return True
            if course in visiting: return False

            visiting.add(course)

            for p in adjList[course]:
                if not dfs(p): return False


            completed.add(course)
            res.append(course)
            visiting.remove(course)
            return True

        for i in range(numCourses):
            if not dfs(i): return []

        return res

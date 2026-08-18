class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        adjList = {i: [] for i in range(numCourses)}
        visiting: set[int] = set()
        completed: set[int] = set()

        # add pre to course
        for c, p in prerequisites:
            adjList[c].append(p)

        
        def dfs(course: int): 
            if course in completed: return True
            if course in visiting: return False

            visiting.add(course)

            for pre in adjList[course]:
                if not dfs(pre): return False

            completed.add(course)
            visiting.remove(course)
            return True

        for i in range(numCourses):
            print(i)
            if not dfs(i): return False

        return True
        
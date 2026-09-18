class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        N = range(numCourses + 1)
        graph = {i: [] for i in N}

        for c, pre in prerequisites:
            graph[c].append(pre)

        completed = set() # detect unconnected components
        visiting = set() # detect cycles

        def dfs(course):
            # cycle detected
            if course in visiting:
                return False

            if course in completed:
                return True

            visiting.add(course)

            for nei in graph[course]:
                if not dfs(nei):
                    return False
            
            completed.add(course)
            visiting.remove(course)

            return True

        for c in N:
            if not dfs(c):
                return False
            
        return True

        # Time: O(E + V) 
        # Space: O(E + V) for the recursive call stack
        # where E is the number of Edges and V is the number of vertices
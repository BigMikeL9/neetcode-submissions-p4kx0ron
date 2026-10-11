"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""

class Solution:
    def cloneGraph(self, node: Optional['Node']) -> Optional['Node']:
        clone = {}

        # dfs(1) -> [2] -> Node(1, []) -> Node(1, [2])
        # dfs(2)

        def dfs(n):
            if n in clone: 
                return clone[n]
                        
            copy = Node(n.val, [])
            clone[n] = copy

            for neigh in n.neighbors:
                neighC = dfs(neigh)
                copy.neighbors.append(neighC)

            return copy
            
        print(clone, node)

        return node if node is None else dfs(node) 
                
        
        

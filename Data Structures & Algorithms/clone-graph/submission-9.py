"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""

class Solution:
    def cloneGraph(self, node: Optional['Node']) -> Optional['Node']:
        hashmap = {}

        def dfs(node):
            if node in hashmap:
                return hashmap[node]
            
            cloned_node = Node(node.val)
            hashmap[node] = cloned_node

            for neigh in node.neighbors:
                 cloned_neigh = dfs(neigh)
                 cloned_node.neighbors.append(cloned_neigh)

            return cloned_node

        return dfs(node) if node else None
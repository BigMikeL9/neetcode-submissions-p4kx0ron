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

        def dfs(original_node):
            if original_node in clone: 
                return clone[original_node]
                        
            copied_node = Node(original_node.val, [])
            clone[original_node] = copied_node # mapping original_node to copies

            for neigh in original_node.neighbors:
                neigh_copy = dfs(neigh)
                copied_node.neighbors.append(neigh_copy)

            return copied_node
            
        print(clone, node)

        return node if node is None else dfs(node) 
                
        
        

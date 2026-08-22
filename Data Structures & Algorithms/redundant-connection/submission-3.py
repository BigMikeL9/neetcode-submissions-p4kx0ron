class Solution:
    def findRedundantConnection(self, edges: List[List[int]]) -> List[int]:
        N = len(edges)

        # every node is its own parent
        parent = [i for i in range(N + 1)] # [0 1 2 3 4]
        size = [1] * (N + 1)

        # finds the ROOT of every node
        # apply path compression where every node is connected directly to its root
        # make time complexity more efficient O(1)
        def find(x):
            # a node is the root, if it is its own parent
            # if not its own parent, find parent
            if parent[x] != x: 
                # path compression
                parent[x] = find(parent[x])
            
            return parent[x]
                
        # connects two subtrees together
        # smaller into bigger to make it efficient as we traverse (smalled tree height)
        # detects a cycle
        def union(a, b):
            root_a = find(a)
            root_b = find(b)

            # if root are same, they belong to the same subtree/component
            # and we have a cycle
            if root_a == root_b:
                return False
            
            # if not in same tree, union/combine them
            # "union by size" to make tree efficient (join smaller tree into bigger)
            if size[root_a] < size[root_b]:
                root_a, root_b = root_b, root_a

            # join trees
            parent[root_a] = parent[root_b]

            # update size of joined tree
            size[root_b] += size[root_a]

            return True

        for a, b in edges:
            if not union(a, b):
                return [a, b]

        print(parent)
        return []
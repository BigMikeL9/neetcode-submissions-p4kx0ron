# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        queue = deque([root])
        res = []

        while queue:
            lvl_size = len(queue)
            lvl = []

            # traverse through every node in the curr level
            for i in range(lvl_size):
                node = queue.popleft()
                
                if node:
                    lvl.append(node.val)
                    queue.append(node.left)
                    queue.append(node.right)

            if lvl:
                res.append(lvl)

        return res
            
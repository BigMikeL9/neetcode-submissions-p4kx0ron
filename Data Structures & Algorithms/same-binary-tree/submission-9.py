# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:

        def dfs(p, q):
            # if both are null -> equal
            if not p and not q:
                return True
            # if both are not null, and one is null -> not equal
            if not p or not q:
                return False
            
            if p.val != q.val:
                return False
            
            print(p.val, q.val)
            
            left = dfs(p.left, q.left)
            if not left:
                return False
            right = dfs(p.right, q.right)
            if not right:
                return False

            return True

        return dfs(p, q)

        
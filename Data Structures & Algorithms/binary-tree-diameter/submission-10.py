# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        res = 0

        def dfs(node):
            nonlocal res
            if node is None:
                return 0

            left = dfs(node.left)
            right = dfs(node.right)

            print(node.val, left, right, left + right, res)

            res = max(res, left + right)

            return 1 + max(left, right)

        dfs(root)
        return res

        # Time: O(n)
        # Space: O(h) where h is the height of the tree
        # O(logn) incase of a balanced tree. O(n) incase of a linked list or a skewed tree
        # where n is the number of nodes/vertex
        
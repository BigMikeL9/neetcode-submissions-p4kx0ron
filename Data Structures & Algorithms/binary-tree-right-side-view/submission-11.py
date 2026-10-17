# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        queue = deque([root])
        res = []

        while queue:
            lvl_size = len(queue) # 1
            lvl = []

            # iterate through every node in current lvl
            for i in range(lvl_size):
                node = queue.popleft()

                # replace current node with left and right sub nodes
                if node:
                    queue.append(node.left)
                    queue.append(node.right)
                    lvl.append(node.val)
                
                # queue = [2, 3]
                # lvl = [1] -> res = [1]
                # queue = [4, 5] -> lvl = [4, 5] -> res = [1, 5]

            if lvl:
                print(lvl, lvl[-1])
                res.append(lvl.pop())
        
        return res


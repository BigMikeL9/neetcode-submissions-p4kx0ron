/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

// We can use Breadth First Search algorithm where as we traverse through the list, we store the nodes
// at the current level fro left to right and then pop the last node which will represent the right most 
// node in that level
// Time Complexity would be linear O(n)
// Space Complexity would be O(n/2) since each level in a binary tree can have at most n/2 nodes. Or simply O(n)

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root: TreeNode | null): number[] {
        if (!root) return []
        const queue = [root]
        const res = [root.val]

        while (queue.length > 0) {
            const levelSize = queue.length
            const levelNodes = []

            for (let i = 0; i < levelSize; i++) {
                const curr = queue.shift()!;

                if (curr.left) {
                    queue.push(curr.left)
                    levelNodes.push(curr.left.val)
                }
                if (curr.right) {
                    queue.push(curr.right)
                    levelNodes.push(curr.right.val)
                }
            }

            console.log(levelNodes)
            if (levelNodes.length > 0) {
                const popped = levelNodes.pop()
                res.push(popped)
            }
        }

        return res
    }
}

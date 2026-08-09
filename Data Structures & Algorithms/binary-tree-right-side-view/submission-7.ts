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
            const level = []

            for (let i = 0; i < levelSize; i++) {
                const node = queue.shift()
                console.log(node.val)

                if (node.left) {
                    queue.push(node.left)
                    level.push(node.left.val)
                }
                if (node.right) {
                    queue.push(node.right)
                    level.push(node.right.val)
                }
            }

            if (level.length > 0) {
                res.push(level.pop())
            }
        }

        return res
    }
}

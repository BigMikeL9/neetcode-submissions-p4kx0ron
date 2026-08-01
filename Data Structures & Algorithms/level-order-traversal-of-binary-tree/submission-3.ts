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
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        if (!root) return []

        const queue = [root]
        const res = [[root.val]]

        while (queue.length > 0) {
            const queueSize = queue.length
            console.log({queue, queueSize})
            const tmpQueue = []

            for (let i = 0; i < queueSize ; i++) {
                const node = queue.shift()

                if (node.left) {
                    queue.push(node.left)
                    tmpQueue.push(node.left.val)
                }

                if (node.right) {
                    queue.push(node.right)
                    tmpQueue.push(node.right.val)
                }
            }

            console.log({tmpQueue})
            if (tmpQueue.length > 0) res.push(tmpQueue)
        }
        
        return res
    }
}

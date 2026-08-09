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
        const queue = [[root]]
        const res = [[root.val]]

        while (queue.length > 0) {
            const tmpQueue = []
            const lvlVal = []
            const lvl = queue.shift()

            for (const n of lvl) {
                if (n.left) {
                    tmpQueue.push(n.left)
                    lvlVal.push(n.left.val)
                }

                if (n.right) {
                    tmpQueue.push(n.right)
                    lvlVal.push(n.right.val)
                }
            }

            if (tmpQueue.length > 0) {
                queue.push(tmpQueue)
                res.push(lvlVal)
            }
            
        }
       

       return res
    }
}

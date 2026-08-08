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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {

        const dfs = (nodeP: TreeNode, nodeQ) => {
            if (!nodeP && !nodeQ) return true // means both are not null
            if (!nodeP || !nodeQ) return false // both are not null but one is, in which case not equal

            if (nodeP.val !== nodeQ.val) return false

            const left = dfs(nodeP.left, nodeQ.left)
            if (!left) return false

            const right = dfs(nodeP.right, nodeQ.right)
            if (!right) return false

            return true
        }

        return dfs(p, q)
    }
}

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
            if (!nodeP && !nodeQ) return true // oth are null -> same 
            if (!nodeP || !nodeQ) return false // only one is null -> different

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

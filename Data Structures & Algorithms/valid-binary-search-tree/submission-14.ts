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
     * @return {boolean}
     */
    isValidBST(root: TreeNode | null): boolean {

        const dfs = (node: TreeNode, min: number = -Infinity, max: number = Infinity) => {
            if (!node) return true

            if (node.val <= min) return false
            if (node.val >= max) return false

            const left = dfs(node.left, min, Math.max(min, node.val))
            if (!left) return false

            const right = dfs(node.right, Math.min(max, node.val), max)
            if(!right) return false

            return true
        }

        return dfs(root)
    }
}

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

        const dfs = (node: TreeNode, min: number, max: number) => {
            if (!node) return true

            // min< left < ancestor (max)
            // min < right < max
            if (min >= node.val) return false
            if (max <= node.val) return false

            const left = dfs(node.left, min, node.val)
            const right = dfs(node.right, node.val, max)

            return left && right
        }

        return dfs(root, -Infinity, Infinity)
    }
}

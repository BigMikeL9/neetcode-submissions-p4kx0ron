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
    isBalanced(root: TreeNode | null): boolean {
        let isBalanced = true;

        const dfs = (node: TreeNode | null) => {
            if (!node) return 0;

            console.log(node)
            const left = dfs(node.left);
            const right = dfs(node.right);

            console.log(left, right)
            console.log('---')

            if (Math.abs(left - right) > 1) isBalanced = false;

            return 1 + Math.max(left, right)
        }

        dfs(root)
        return isBalanced
    }
}

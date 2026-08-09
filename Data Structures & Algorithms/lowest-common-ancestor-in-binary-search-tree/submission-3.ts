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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null) {
        let res = null

        const dfs = (node: TreeNode) => {
            if (!node) return

            if (node.val === p.val || node.val === q.val) {
                res = node
                return true
            }

            const left = dfs(node.left)
            const right = dfs(node.right)

            console.log({node, left, right})

            if (left && right) res = node
            if (left || right) return true

            return false
        }

        dfs(root)
        return res
    }
}

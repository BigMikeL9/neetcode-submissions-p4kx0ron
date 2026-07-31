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

        const dfs = (pNode: TreeNode, qNode: TreeNode) => {
            if (!pNode && !qNode) return true
            if (!pNode || !qNode) return false

            if (pNode.val !== qNode.val) return false

            const left = dfs(pNode.left, qNode.left)
            if (!left) return false

            const right = dfs(pNode.right, qNode.right)
            if (!right) return false

            console.log({left, right})

            return left && right
        }

        return dfs(p, q)
    }
}

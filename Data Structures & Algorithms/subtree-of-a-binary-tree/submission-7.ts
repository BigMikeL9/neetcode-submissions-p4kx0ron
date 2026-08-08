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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {

        const dfs = (node: TreeNode) => {
            if (!node) return false

            if (node.val === subRoot.val) {
                console.log({node, subRoot})
                const isSame = this.isSame(node, subRoot)
                if (isSame) return true
            }

            const left = dfs(node.left)
            const right = dfs(node.right)

            return left || right
        }

        return dfs(root)
    }

    isSame(nodeP: TreeNode, nodeQ: TreeNode): boolean {
        if (!nodeP && !nodeQ) return true // Both are null -> same
        if (!nodeP || !nodeQ) return false // Only one is null -> different

        if (nodeP.val !== nodeQ.val) return false

        const left = this.isSame(nodeP.left, nodeQ.left)
        if (!left) return false

        const right = this.isSame(nodeP.right, nodeQ.right)
        if (!right) return false

        return true
    }
}

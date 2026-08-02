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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root: TreeNode | null, k: number): number {
        let index = 0

        const dfs = (node: TreeNode) => {
            if (!node) return

            const left = dfs(node.left)
            if (left) return left
            
            index += 1
            console.log({node, index})
            if (index === k) return node.val

            const right = dfs(node.right)
            if (right) return right
        }

        return dfs(root)
    }
}

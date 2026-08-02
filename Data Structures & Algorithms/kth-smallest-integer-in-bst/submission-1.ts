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
        let res = null

        const dfs = (node: TreeNode) => {
            if (!node) return

            const left = dfs(node.left)
            
            index += 1
            console.log({node, res})
            if (index === k) res = node.val

            const right = dfs(node.right)
        }

        dfs(root)
        return res
    }
}

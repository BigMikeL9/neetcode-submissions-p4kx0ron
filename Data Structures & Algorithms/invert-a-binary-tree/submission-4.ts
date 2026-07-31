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
     * @return {TreeNode}
     */
    invertTree(root: TreeNode | null): TreeNode {
        
        const dfs = (node: TreeNode) => {
            if (!node) {
                return
            }

            // [node.left, node.right] = [node.right, node.left]

            const tmp = node.left
            node.left = node.right
            node.right = tmp

            dfs(node.left)
            dfs(node.right)
        } 

        dfs(root)
        return root
    }
}

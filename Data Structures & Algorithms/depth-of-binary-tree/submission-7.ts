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

// We can use a recursive dfs where as we traverse down the left and right sub trees
// we keep track of the max depth in a global variable. To do so we owuld need
// helper dfs method.
// Time Complexity would be linear O(n)
// Space Complexity would be O(h) where h is the heigh of the binary tree
// Space allocated is for the recursion calls in the call stack
// If it is a balanced tree, Space Complexity would be O(logn)
// if it is not a balanced tree, Space Complexity would be linear O(n)

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root: TreeNode | null): number {
        const dfs = (node: TreeNode | null) => {
            if (!node) return 0;

            const left = dfs(node.left);
            const right = dfs(node.right);

            return 1 + Math.max(left, right);
        }

        return dfs(root) ?? 0
    }
}

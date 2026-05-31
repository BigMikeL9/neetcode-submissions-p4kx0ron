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

// We use Depth First Search to travers the left and right nodes subtrees. Keeping track of the depth along the way.
// Time Complexity is O(n)
// Space Complexity is O(h) where h is the height of the binary tree
// For a Balanced Binary tree, Space COmplexity is O(log n)
// For a Degenerate Binary tree, Space Complexity is O(n)

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root: TreeNode | null): number {
        if (!root) return 0;

        const left = this.maxDepth(root.left)
        const right = this.maxDepth(root.right)

        return 1 + Math.max(left, right)
    }
}

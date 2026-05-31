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

// We can use a depth first search algorithm to traverse through each node children, counting the depth as we 
// go deeper. 
// Time Complexity would be linear O(n)
// Space Complexity would be O(h) where h is the height of the binary tree
// For a balanced tree Space Complexity would be O(log n)
// For a degenerate binary tree, Space Complexity would be linear O(n)

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root: TreeNode | null): number {
        if (!root) return 0;

        const left = this.maxDepth(root.left);
        const right = this.maxDepth(root.right);

        // + 1 to count the current node
        return 1 + Math.max(left, right);
    }
}

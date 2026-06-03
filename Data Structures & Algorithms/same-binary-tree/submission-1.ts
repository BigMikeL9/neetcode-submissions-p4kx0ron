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

// We can use a recursive Depth First Search algorithm to each node in both trees and check if they are equivalient.
// So we basically compare both nodes and if at any pont the structure id different or the values are no the same, 
// we return false
// Time Complexity would be O(m + n) where m and n is the number of nodes in each tree
// Space Complexity would be O(h) where h is the maximum height of both tree due to the recursion call stack
// For a balanced tree, space complexity is O(log(m * n))
// For a non-balanced tree, space complexity is O(m + n)

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
        // check if both nodes are null, inwhich case they are equal
        if (!p && !q) return true

        // check if one node is null, while other is not
        if (!p || !q) return false

        // check node values
        if (p.val !== q.val) return false

        const left = this.isSameTree(p.left, q.left)
        const right = this.isSameTree(p.right, q.right)

        return left && right
    }
}

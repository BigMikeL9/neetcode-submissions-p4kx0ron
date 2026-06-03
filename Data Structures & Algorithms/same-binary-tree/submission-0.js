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
// Time Complexity would be O(m * n) where m and n is the number of nodes in each tree
// Space Complexity would be O(p_height + q_height) where height is the height of the tree
// For a balanced tree, space complexity is O(log(m * n))
// For a non-balanced tree, space complexity is O(m * n)

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        // check if both nodes are not null
        if (!p && !q) return true

        // if one node is null, while the other is not
        if (!p || !q) return false

        // check node values
        if (p.val !== q.val) return false

        const left = this.isSameTree(p.left, q.left);
        console.log(p.left, q.right, left)
        const right = this.isSameTree(p.right, q.right);

        return left && right
    }
}

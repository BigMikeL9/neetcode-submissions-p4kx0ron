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

// As traverse through the binary tree, we can check for a few conditions
// if both p and q values are less than and greater than the current node, then that means the current node is the LCA
// if they are both, less than the current node val, then we traverse left
// if they are both greater than the current node val, we traverse right 

// Edge Cases: 
// 1. If the ancestor is equal to p or q, then we found ourt LCA. Because it will have no ancestor lower in the subtree

// Time Complexity would be O(logh) where h is the height of the stack
// Space Complexity would be constant O(1)

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(
        root: TreeNode | null,
        p: TreeNode | null,
        q: TreeNode | null,
    ) {
        let curr = root;

        while (curr) {
            if (curr.val === p.val || curr.val === q.val) return curr

            if (curr.val > p.val && curr.val > q.val) curr = curr.left
            else if (curr.val < p.val && curr.val < q.val) curr = curr.right
            else return curr
        }
    }
}

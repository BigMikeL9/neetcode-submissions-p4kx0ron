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

// We can use a Depth First Search approach by recursive swapping the left and 
// right nodes as we traverse through the list
// Time Complexity would be linear O(n)
// Space Complexity would also be linear O(n) for the recursion stack

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root: TreeNode | null): TreeNode {
        if (!root) return null;

        // swap nodes
        const tmp = root.left;
        root.left = root.right;
        root.right = tmp;

        this.invertTree(root.left);
        this.invertTree(root.right);

        return root;
    }
}

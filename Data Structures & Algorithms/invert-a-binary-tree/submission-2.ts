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

// I would use a recursive dfs where as we traverse through the left and irght subtrees, I would 
// reverse the values of the left and right nodes
// Time Complexity would be linear O(n)
// Space Complexity would be O(h) where h is the height of the tree. Space allocated is for the recursive 
// calls in the call stack
// If its a balanced-tree Space Complexity would be O(logn)
// If it is nor a balanced tree, space Complexity would be linear O(n)

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root: TreeNode | null): TreeNode {
        if (!root) return null

        const tmp = root.left
        root.left = root.right
        root.right = tmp

        this.invertTree(root.left)
        this.invertTree(root.right)

        
        // if (left && right) {
        //     const tmp = left.val
        //     left.val = right.val
        //     right.val = tmp
        // }

        return root;
    }
}

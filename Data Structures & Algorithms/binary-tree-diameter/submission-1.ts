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

// We can use Depth First Search recursion to get the max depth or height of the left and right subtrees.
// And then we add those height to get the diameter. 
// Time Complexity would be linear O(n)
// Space Complexity would be O(h) where h is the height the binary tree due to memory allocated for the call stack
// For a balanced tree, space complexity would be O(logn)
// For a non-balanced tree (linked-list), space complexity would be O(n)

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root: TreeNode | null): number {
        let res = 0;

        function dfs (node: TreeNode | null) {
            console.log(this)
            if (!node) return 0;

            // get max depth of left and right subtrees
            const left = dfs(node.left)
            const right = dfs(node.right)

            res = Math.max(res, left + right)
            return 1 + Math.max(left, right)
        }

        dfs(root);
        return res;
    }
}

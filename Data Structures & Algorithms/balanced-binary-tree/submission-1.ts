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

// We can use a Depth First Search recursion to get the height of both the left and right subtrees
// if the difference between the heights is greater than 1, we return false othewise we continue
// Time Complexity would be linear O(n)
// Space Complexity would be O(h) for the memory allocated for the call stack due to recursion
// For a balanced tree, space complexity would be O(logn)
// For a non-balanced tree, space complexity would be linear O(n)
// Where n is the number of node, and h is the height of the tree

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root: TreeNode | null): boolean {

        const dfs = (node: TreeNode) => {
            if (!node) return 0;

            // get the height of the left and right subtrees
            const left = dfs(node.left)
            const right = dfs(node.right)

            // non-balanced tree
            if (left === -1 || right === -1) return -1;

            if (Math.abs(left - right) > 1) return -1;
            return 1 + Math.max(left, right)
        }

        return dfs(root) !== -1
    }
}

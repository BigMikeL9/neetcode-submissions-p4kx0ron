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

// we canuse a recursive depth first search algorithm where as we traverse
// through the left and rigth subtrees we keep track of the longest path in 
// a global variable.
// Time Complexity would be linear O(n)
// Space Complexity would be O(h) where h is the height of the tree. 
// Allocated space is for the dfs recursion calls in the call stack
// If it is a balanced tree, Space Complexity would be O(logn)
// If it is a non-balanced tree, Space Complexity would be linear O(n)

// height = 1 + max(left, right)
// diameter = left + right

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root: TreeNode | null): number {
        let res = 0;

        const dfs = (node: TreeNode | null) => {
            if (!node) return 0;

            const left = dfs(node.left);
            const right = dfs(node.right);

            const diameter = left + right;
            console.log(diameter)
            res = Math.max(res, diameter)

            return 1 + Math.max(left, right)
        }

        console.log('res', dfs(root))
        return res
    }
}

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

// We can use a Depth First Search algorithm where as we traverse through the left and right subtrees, 
// We compare the each node val with its ancesotr val, if it is smaller than its ancestor that means its a good node
// and we increment our counter. Otherwise we continue traversing through the tree
// Time Complexity would be linear O(n) since we visit every node at most once
// Space Complexity would O(h) where h is the height of the tree. The memory allocated is for the recursive call stack
// For a balanced binary tree, space complexity is O(logn)
// For a non-balanced tree (linked-list), space complexity is linear O(n)

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root: TreeNode | null): number {
        if (!root) return 0

        // root will be counted as a good node in dfs method
        let count = 0;

        const dfs = (node: TreeNode | null, maxSoFar: number | null) => {
            if (!node) return null

            // node: 3, ancestorNode: 1
            if (node.val >= maxSoFar) count++

            const currMax = Math.max(node.val, maxSoFar)

            dfs(node.left, currMax)
            dfs(node.right, currMax)
        }

        dfs(root, root.val)
        return count
    }
}

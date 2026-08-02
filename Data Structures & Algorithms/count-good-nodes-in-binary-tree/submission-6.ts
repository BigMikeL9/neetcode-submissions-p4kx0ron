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

// We can use recursive dfs where as we traverse each node in the tree
// we keep track of the maxValue seen so far
// if the curr node val is greater than or equal to maxVal so far, increment a res var
// Time: O(n) since we visit every node at most once
// Space: O(n) for the recursion call stack

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root: TreeNode | null): number {
        let res = 0

        const dfs = (node: TreeNode, maxSoFar: number) => {
            if (!node) return 

            if (node.val >= maxSoFar) res += 1

            const maxVal = Math.max(maxSoFar, node.val)

            dfs(node.left, maxVal)
            dfs(node.right, maxVal)
        }

        dfs(root, -101)
        return res
    }
}

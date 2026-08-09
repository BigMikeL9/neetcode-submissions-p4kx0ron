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

// Each node key needs to fall between a range
// If we're traversing left the node the node key needs to be smaller than the min val encountered so far
// If we're traversing right the node key needs to be greater than the max val encountered so far
// Time: O(n)
// Space: O(h)

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root: TreeNode | null): boolean {

        const dfs = (node: TreeNode, min: number = -Infinity, max: number = Infinity) => {
            if (!node) return true

            // console.log({val: node.val, min, max})

            if (node.val <= min) return false
            if (node.val >= max) return false

            // dfs(1, -Inifnity, 2)
            const left = dfs(node.left, min, node.val)
            if (!left) return false

            // dfs(3, 2, Inifinty)
            const right = dfs(node.right, node.val, max)
            if (!right) return false

            return true
        }

        return dfs(root)
    }
}

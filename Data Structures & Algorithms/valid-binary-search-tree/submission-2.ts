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

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root: TreeNode | null): boolean {
        const dfs = (node: TreeNode | null, 
                    minVal: number = -Infinity, 
                    maxVal: number = Infinity) => {

            if (!node) return true

            console.log(minVal, '<', node.val, '<', maxVal)
            // conditions
            if (node.val <= minVal) return false
            if (node.val >= maxVal) return false

            // [4, 2, null, null, 5, 3, 7]
            // 4 < 5 < inf
            // 4 < 3 < inf
            // -inf < 2 < 1
            const left = dfs(node.left, minVal, Math.min(maxVal, node.val))
            const right = dfs(node.right, Math.max(minVal, node.val), maxVal)

            return left && right
        }

        const res = dfs(root) 
        console.log(res)
        return res 
    }
}

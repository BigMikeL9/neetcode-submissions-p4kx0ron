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
     * @return {number}
     */
    maxDepth(root: TreeNode | null, count: number = 0): number {
        let res = 0;

        if (!root) return count;
        let countC = count;
        countC++;
        
        count = this.maxDepth(root.left, countC);
        console.log(root, countC, count)
        res = Math.max(res, count);
        count = this.maxDepth(root.right, countC);
        res = Math.max(res, count);

        return res;
    }
}

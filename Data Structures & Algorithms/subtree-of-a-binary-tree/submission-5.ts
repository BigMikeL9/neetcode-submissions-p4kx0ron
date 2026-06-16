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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
        if (!root && !subRoot) return true;
        if (!root || !subRoot) return false;

        const isSame = this.isSameTree(root, subRoot);

        if (isSame) return true;

        const left = this.isSubtree(root.left, subRoot)
        if (left) {
            return true
        }

        const right = this.isSubtree(root.right, subRoot)
        if (right) return true

        return false
    }

    isSameTree(p: TreeNode | null, q: TreeNode | null) {
            if (!p && !q) return true;
            if (!p || !q) return false;

            if (p.val !== q.val) return false;

            const left = this.isSameTree(p.left, q.left)
            if (!left) return false

            const right = this.isSameTree(p.right, q.right)
            if (!right) return false

            return left && right
    }
}

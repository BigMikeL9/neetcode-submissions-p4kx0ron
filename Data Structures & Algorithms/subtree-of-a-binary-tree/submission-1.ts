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

// We can use recursive Depth First Search as we traverse through the root tree to check if the subroot exist
// using another recursice dfs.
// A few edge cases which is that 
// 1. if the root is null but subroot isn't that would mean we the subroot doesnot exist in the root and we return false
// 2. If the subroot is null, and root isn't we return true becuase root contains a null node
// 3. If both trees are null return true


class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
        if (!root && !subRoot) return true
        if (!subRoot && root) return true
        if (!root && subRoot) return false

        console.log(root.val, subRoot.val)
        console.log('--------')

        // check if both trees are same
        const isSame = this.isSameTree(root, subRoot)

        if (isSame) return true

        const leftIsSame = this.isSubtree(root.left, subRoot)
        if (leftIsSame) return true;

        const rightIsSame = this.isSubtree(root.right, subRoot)

        return leftIsSame || rightIsSame
    }

    isSameTree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
        // if both node are null, they are equal
        if (!root && !subRoot) return true

        // if one is null, and other is not, return false
        if (!root || !subRoot) return false

        // check node values
        if (root.val !== subRoot.val) return false

        const left = this.isSameTree(root.left, subRoot.left)
        const right = this.isSameTree(root.right, subRoot.right)

        return left && right
    }
}

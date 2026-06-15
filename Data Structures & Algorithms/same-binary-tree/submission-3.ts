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

// We can use a recursive dfs algorithm where as we traverse through the left and right subtrees
// we compare the left and right nodes. If they are different return false. Otherwise, return true.
// Time Complexity would be linear O(n)
// Space Complexity would be O(h) where h is the height of the each tree
// If they are balanced trees, Space Complexity would be O(logn)
// If they are non-balanced trees, Space Complexity would be linear O(n)
// Memory allocated is for the recursive calls in the call stack

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
        // if both are null, that means they are equal -> return true
        // if both are not null, and one of is null, that means they are not equal. 
        if (!p && !q) return true; // if both are null
        if (!p || !q) return false // if either is null, return false

        if (p.val !== q.val) return false

        const left = this.isSameTree(p.left, q.left);
        
        // guard clause. no need to execute rest if left is not equal
        if (!left) return false;

        const right = this.isSameTree(p.right, q.right);
        if (!right) return false;

    
        return left && right;        
    }
}

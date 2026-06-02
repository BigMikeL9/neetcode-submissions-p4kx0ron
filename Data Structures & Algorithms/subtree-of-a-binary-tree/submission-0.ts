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

// We can use a Depth First Search recursively to compare the left and right sibtrees of the root and the subroot trees
// Time Complexity would be O(n + m) where n the number of nodes in the root and m is the number of nodes in the subroot
// Space Complexity would be O(h) where h is the height of the root tree
// The space is for memory allocated in the call stack due to recursion
// For a balanced tree, space complexity is O(logn)
// For a non-balanced tree, space complexity is linear O(n)


class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {

        const sameTree = (rootNode: TreeNode | null, subRootNode: TreeNode | null): boolean => {
            if (!rootNode && !subRootNode) return true

            // if one of them is null, but not the other
            if (!rootNode || !subRootNode) return false

            if (rootNode.val !== subRootNode.val) return false

            const left = sameTree(rootNode.left, subRootNode.left)
            const right = sameTree(rootNode.right, subRootNode.right)
            
            return left && right
        }

        const isSameTree = sameTree(root, subRoot)
        console.log('---', root, '---', subRoot, '---', isSameTree)
        if (isSameTree) return true
        else {
            if (root.left) {
                const res = this.isSubtree(root.left, subRoot)
                if (res === true) return true;    
            }
            if (root.right && subRoot) {
                const res = this.isSubtree(root.right, subRoot)
                if (res === true) return true;  
            }
        }

        return false
    }
}

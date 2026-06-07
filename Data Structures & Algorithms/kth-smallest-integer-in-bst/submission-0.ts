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

// We can use a recursive DFS where we traverse through the left subtree first and then as we bubble back up
// we add current nod value to a list and their right nodes. Once the list length reaches k size, we return 
// the current node
// Time Complexity would be linear O(n)
// Space Complexity would be O(h) where h is the height of the tree. Memory allocted is for the call stack due to 
// recursion.
// For a balanced binary tree, space complexity would be O(logn) which BST is so Space Complexity is actually O(logn)
// For a non-balanced binary tree, space complexity would be linear O(n)

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root: TreeNode | null, k: number): number {
        let stack = []

        const dfs = (node: TreeNode | null) => {
            if (!node) return 

            

            // process left subtree
            dfs(node.left)

            // add left subtree node values as we bubble back up
            if (stack.length === k) return
            stack.push(node.val)
            console.log(stack.length, k, stack)
            
            // process the right nodes as we bubble back up
            dfs(node.right)
        }

        dfs(root)
        return stack[stack.length - 1]
    }
}

// We can use a quickselect algorithm where we partition or divide the nums array using a pivot. 
// all smaller nums than the pivot would go the left side and greater nums would go to the right side
// we can reursivley repeat the process until the the index of the current pivot is equal to that 
// of the kth largest num index
// Time Complexity would be linear O(n) and O(n^2) in worst case if we keep picking the worst possible pivot
// Space Complexity would be constant O(1)

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums: number[], k: number): number {
        // index of keth element
        const targetIndex = nums.length - k; // 3

        const quickSelect = (l: number, r: number) => {
            const pivot = nums[r]
            // p represents the index where the next element that belongs in the left partition should be placed
            let p = l 

            // Partition the array
            // [2,3,1,4,4]
            for (let i = l; i < r; i++) {
                if (nums[i] <= pivot) {
                    // move to the left
                    // in this example, initially 2 will be swapped with itself
                    [nums[p], nums[i]] = [nums[i], nums[p]]
                    p++
                }
            }

            // move pivot to p
            // because we moved all nums smaller that pivot to left and greater than to right
            [nums[p], nums[r]] = [nums[r], nums[p]]

            // console.log(l, r, p, pivot, nums)

            if (p === targetIndex) return nums[p]
            if (p < targetIndex) return quickSelect(p + 1, nums.length - 1)
            if (p > targetIndex) return quickSelect(l, p - 1)
            
        }

        return quickSelect(0, nums.length - 1)
    }
}

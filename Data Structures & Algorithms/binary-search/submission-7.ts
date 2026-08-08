class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        if (nums.length === 0) return -1

        let l = 0
        let r = nums.length - 1

        while (l <= r) {
            const mid = Math.floor((r + l)/ 2)

            console.log({mid, l , r, m: nums[mid]})
            if (nums[mid] === target) return mid
            
            if (nums[mid] < target) l = mid + 1
            else r = mid - 1
        }

        return -1
    }
}

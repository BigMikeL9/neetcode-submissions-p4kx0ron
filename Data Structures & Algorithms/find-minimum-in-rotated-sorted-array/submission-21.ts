class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let l = 0;
        let r = nums.length - 1;

        let res = Infinity;

        while (l <= r) {
            const m = Math.floor(r - l / 2);

            if (nums[m] > nums[r]) l = m + 1
            else r = m - 1
            
            res = Math.min(res, nums[m])
        }

        return res;
    }
}

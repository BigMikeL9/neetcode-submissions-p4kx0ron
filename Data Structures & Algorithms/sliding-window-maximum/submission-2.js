class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const res = [];
        let l = 0;

        for (let r = 0; r < nums.length; r++) {

            if (r - l + 1 === k) {
                const maxValue = Math.max(...nums.slice(l, r + 1));
                res.push(maxValue);
                l++;
            }
        }
        
        return res;
    }
}

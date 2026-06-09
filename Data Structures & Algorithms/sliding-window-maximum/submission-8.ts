class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums: number[], k: number): number[] {
        let res = []

        let l = 0;
        

        for (let r = 0; r < nums.length; r++) {

            if (r - l + 1 === k) {
                const max = Math.max(...nums.slice(l, r + 1));
                res.push(max);
                l++
            }
        }

        return res;
    }
}

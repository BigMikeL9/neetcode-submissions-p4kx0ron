class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const res = []

        for (let i = 0; i < nums.length; i++) {
            let runningProd = 1

            for (let j = 0; j < nums.length; j++) {
                if (j === i) continue
                runningProd *= nums[j]
            }
            
            res.push(runningProd)
        }

        return res
    }
}

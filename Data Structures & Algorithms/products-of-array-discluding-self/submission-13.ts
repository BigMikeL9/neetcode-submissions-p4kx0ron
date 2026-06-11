class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const res = [];

        const prefixArr = Array(nums.length).fill(1);
        // [1, 1, 1, 1]
        // 1 [1, 2, 4, 6]
        // prefix: [1, 1, 2, 8]
        let prefix = 1;
        for (let i = 0; i < nums.length; i++) {
            prefixArr[i] = prefix;
            console.log(nums[i])
            prefix *= nums[i]
        }

        // [1, 1, 1, 1]
        // 1 [1, 2, 4, 6] 1
        // suffix: [48, 24, 6, 1]
        const suffixArr = Array(nums.length).fill(1);
        let suffix = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            suffixArr[i] = suffix;
            suffix *= nums[i]
        }

        console.log(prefixArr, suffixArr)

        // [48, 24, 12, 8]
        for (let i = 0; i < nums.length; i++) {
            console.log(prefixArr[i], suffixArr[i])
            const prod = prefixArr[i] * suffixArr[i]
            res.push(prod)
        }

        return res;
    }
}

// const solution = new Solution()
// const res = solution.productExceptSelf([-1,0,1,2,3]) // Expect: [0,-6,0,0,0]
// console.log(res);

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums: number[], k: number): number {
        const hashMap = new Map()
        let res = 0

        // account for the prefix sum before the prefix iteration starts
        hashMap.set(0, 1)

        let prefix = 0
        for (let i = 0; i < nums.length; i++) {
            prefix += nums[i]
            
            if (hashMap.has(prefix - k)) {
                res += hashMap.get(prefix - k)
            }

            hashMap.set(prefix, (hashMap.get(prefix) || 0) + 1)
        }

        console.log(hashMap)

        return res
    }
}

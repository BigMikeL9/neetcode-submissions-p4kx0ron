class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums: number[], k: number): number {
        const hashMap = new Map<number, number>()
        hashMap.set(0, 1)
        
        let res = 0
        let prefix = 0

        for (const n of nums) {
            prefix += n

            // previousePrefix = currPrefix - k
            // { {0, 1}, {2: 2}, {1: 1}, {4, 1}}
            // 2 - 2 = 0
            // 1 - 2 = -1
            // 2 - 2 = 0
            // 4 - 2 = 2
            if (hashMap.has(prefix - k)) {
                res += hashMap.get(prefix - k)
            }

            hashMap.set(prefix, (hashMap.get(prefix) || 0) + 1)
        }

        return res
    }
}

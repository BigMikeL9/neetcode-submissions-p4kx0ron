class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const bucketSort = Array.from({length: nums.length + 1}, () => [])
        const hashMap = new Map()
        const res = []

        // char freq
        for (let i = 0; i < nums.length; i++) {
            hashMap.set(nums[i], (hashMap.get(nums[i]) || 0) + 1)
        }

        // create bucket sort arr
        for (const [key, val] of hashMap) {
            bucketSort[val].push(key)
        }

        console.log({bucketSort})

        for (let i = bucketSort.length - 1; i > 0; i--) {
            while (bucketSort[i].length > 0 && res.length < k) {
                const popped = bucketSort[i].pop()
                res.push(popped)
            }
        }

        return res
    }
}

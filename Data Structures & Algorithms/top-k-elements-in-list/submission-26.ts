class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const hashMap = new Map()
        const res = []

        // freq count
        for (let i = 0; i < nums.length; i++) {
            hashMap.set(nums[i], (hashMap.get(nums[i]) || 0) + 1)
        }

    console.log(hashMap.entries(), hashMap)
        const sorted = [...hashMap.entries()].sort((a, b) => a[1] - b[1])

        console.log(sorted)

        let counter = 0
        for (let i = sorted.length - 1; i >= 0; i--) {
            console.log({i, item: sorted[i]})
            if (counter < k) res.push(sorted[i][0])
            counter++
        }

        return res
    }

}

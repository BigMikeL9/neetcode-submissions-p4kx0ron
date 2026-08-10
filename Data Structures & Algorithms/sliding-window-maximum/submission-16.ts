class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums: number[], k: number): number[] {
        const res = []
        
        const deque = [] // Monotonic Descending Queue
        // front if the deque always contains largest element

        // [2, 1]
        let l = 0
        for (let r = 0; r < nums.length; r++) {
            while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[r]) {
                deque.pop()
            }

            // push index not num
            deque.push(r)


            if ((r - l + 1) === k) {
                // console.log({deque})
                res.push(nums[deque[0]])
                // update deque. Remove num that will not be in the window after shifting to right
                if (deque[0] === l) deque.shift() 
                l++
            }
        }

        return res
    }
}

class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const res = []
        let l = 0
        let r = 1

        while (r <= temperatures.length) {
            if (temperatures[l] < temperatures[r]) {
                res.push(r - l)
                l++
                r = l + 1
            } else {
                r++

                // if we reach the end with no higher temp
                if (r === temperatures.length) {
                    res.push(0)
                    l++
                    r = l + 1
                }
            }            
        }

        res.push(0)
        return res
    }
}

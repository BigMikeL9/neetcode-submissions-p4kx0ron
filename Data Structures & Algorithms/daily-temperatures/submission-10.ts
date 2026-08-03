class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const res = []

        outerLoop: for (let i = 0; i < temperatures.length; i++) {
            for (let j = i + 1; j < temperatures.length; j++) {
                if (temperatures[i] < temperatures[j]) {
                    res.push(j - i)
                    continue outerLoop
                } 
            }

            // no warmer temp found
            res.push(0)
        }

        

        return res
    }
}

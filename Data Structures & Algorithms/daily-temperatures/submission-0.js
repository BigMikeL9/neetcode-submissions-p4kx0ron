class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = [];

        for (let i = 0; i < temperatures.length; i++) {
            let count = 1;
            let j = i + 1;

            console.log('----')
            while (j < temperatures.length) {
                // console.log(temperatures[i], temperatures[j])
                if (temperatures[j] > temperatures[i]) break;
                else {
                    count++;
                    j++;
                }
                
            }

            count = j === temperatures.length ? 0 : count;

            res.push(count);
        }
        
        return res;
    }
}

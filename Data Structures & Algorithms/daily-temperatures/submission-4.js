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

            while (j < temperatures.length) {
                if (temperatures[j] > temperatures[i]) break;
                count++;
                j++;
            }

            console.log(i, j);

            // if reached the end and haven't found a higher temperature, return 0
            count = j === temperatures.length ? 0 : count;
            res.push(count);
        }

        return res;
    }
}

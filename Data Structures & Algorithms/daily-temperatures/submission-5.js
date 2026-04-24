class Solution {
    // I will use a Monotanoic Decreasing stack 
    // Where I will use the indices of temperatures to get the days between them
    // If the last added temp in the satck higher than any other previous temperatures, 
    // I will pop them and calculate they days it took using the indices

    // Time Complexity is O(n) where n is the length of temperatures where each temperature has max of 
    // two operations, either poped or added to the stack
    // Space Complexity is O(n)

    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n = temperatures.length;
        const stack = [];
        const res = new Array(n).fill(0);

        for (let i = 0; i < n; i++) {
            console.log(stack);

            while (stack.length > 0 && temperatures[i] > stack[stack.length - 1][0]) {
                const lowerTemp = stack.pop();
                console.log(lowerTemp)
                res[lowerTemp[1]] = i - lowerTemp[1];
            }

            stack.push([temperatures[i], i])
        }

        return res;
    }
}

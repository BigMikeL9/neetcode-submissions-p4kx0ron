class Solution {
    // We can calculate the time that each car will reach its destination. 
    // If the car behind reaches the destnation in less time than the car infornt of it
    // then that means it will catch  up at some point and become partt of the fleet. 
    // Since no car can pass another, if it catches up its speed will be equal to that of 
    // the car infront of it.
    // We would need first sort the cars by position and then use a Monatonic decreasing stack

    // Time Complexity is O(nlogn + n) or O(n)
    // Space Complexity is O(n) for the stack
    // where n is the number of cars

    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const stack = [];

        const cars = position.map((p, i) => [p, speed[i]]).sort((a, b) => a[0] - b[0]);

        // [1, 3] (3), [4, 2] (3)
        for (let i = cars.length - 1; i >= 0; i--) {
            const [position, speed] = cars[i];
            
            // time car will reach destination
            const time = (target - position) / speed; // 3

            stack.push(time);

            console.log(time, stack[i - 1]);
            
            if (stack.length > 0 && time <= stack[stack.length - 2]) {
                stack.pop();
            }
        }

        return stack.length;
    }
}

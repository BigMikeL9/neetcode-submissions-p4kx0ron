class MinStack {
    constructor() {
        this.stack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (this.stack.length > 0) {
            // get the last element in the stack
            const last = this.stack[this.stack.length - 1];
            const lastMinVal = last[1];
            this.stack.push([val, lastMinVal < val ? lastMinVal : val]);
        } else {
            this.stack.push([val, val]);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.stack.length > 0) {
            const indx = this.stack.length - 1;
            this.stack.splice(indx, 1);
        }
    }

    /**
     * @return {number}
     */
    top() {
        if (this.stack.length > 0) return this.stack[this.stack.length - 1][0];
    }

    /**
     * @return {number}
     */
    getMin() {
        if (this.stack.length > 0) return this.stack[this.stack.length - 1][1];
    }
}

const instance = new MinStack();
instance.push(1);
instance.push(2);
instance.push(0);

const res = instance.getMin();
console.log(res); // expect: 0

instance.pop();

const res2 = instance.top();
console.log(res2);

const res3 = instance.getMin();
console.log(res3); // expect: 1

class MinStack {
    private stack: [number, number][];

    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        if (this.stack.length > 0) {
            const prevMin = this.stack[this.stack.length - 1][1];
            this.stack.push([val, prevMin < val ? prevMin : val]);
        } else {
            this.stack.push([val, val]);
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        const popped = this.stack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length - 1][0]
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.stack[this.stack.length - 1][1];
    }
}

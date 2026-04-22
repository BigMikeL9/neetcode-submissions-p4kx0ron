class MinStack {
    #stack = [];
    #minStack = [];

    constructor() {
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.#stack.push(val);
        if (this.#minStack.length > 0 && this.#minStack[this.#minStack.length - 1] <= val) 
            this.#minStack.push(this.#minStack[this.#minStack.length - 1]);
        else this.#minStack.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
        this.#stack.pop();
        this.#minStack.pop();1
    }

    /**
     * @return {number}
     */
    top() {
        return this.#stack[this.#stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return Math.min(...this.#stack);
    }
}

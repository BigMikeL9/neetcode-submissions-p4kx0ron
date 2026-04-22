class MinStack {
    // push, pop and top are all O(1) time complexity 
    // The challenge is getting getMin() to O(1)
    // To do so I will create two stacks. 
    // The first will be the main stack and the other will contains the min values that correspond to 
    // to each item in the stack
    // When I remove an item from the main stack, I would also remove it from the minStack
    
    // Time COmplexity would be O(1)
    // Space Complexity would be O(2n) or simply linear O(n)
    // where n is the number of element in the stack


    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        const minVal = this.minStack.length > 0 ? Math.min( this.minStack[this.minStack.length - 1], val) : val; 
        this.minStack.push(minVal)
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

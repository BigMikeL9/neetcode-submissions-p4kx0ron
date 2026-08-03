class MinStack {
    stack: number[][]

    constructor() {
        this.stack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        if (this.stack.length == 0) this.stack.push([val, val])
        else {
            const last = this.stack[this.stack.length - 1]
            if (last[1] <= val) this.stack.push([val, last[1]]) 
            else this.stack.push([val, val])
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        if (this.stack.length <= 0) return null
        this.stack.pop()
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
        return this.stack[this.stack.length - 1][1]
    }
}

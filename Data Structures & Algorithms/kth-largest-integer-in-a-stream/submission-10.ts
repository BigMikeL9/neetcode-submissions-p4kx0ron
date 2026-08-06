class MaxHeap {
    maxHeap: number[]

    constructor() {
        this.maxHeap = []
    }

    push(n: number) {
        this.maxHeap.push(n)
        return this.maxHeap.sort((a, b) => b - a)
    }

    get() {
        return this.maxHeap
    }

    pop() {
        return this.maxHeap.shift()
    }

    size() {
        return this.maxHeap.length
    }
}

class KthLargest {
    maxHeap: MaxHeap
    k: number

    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k: number, nums: number[]) {
        this.maxHeap = new MaxHeap()
        this.k = k

        for (const n of nums) {
            this.maxHeap.push(n)
        }

        // should be sorted in descending order. ie: max num at the top
        console.log(this.maxHeap)
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val: number): number {
        const heap = this.maxHeap.push(val)

        console.log(this.maxHeap)

        for (let i = 0; i < this.k; i++) {
            console.log({i, k: this.k, iVal: heap[i]})
            if (i + 1 === this.k) {
                return heap[i]
            }
        }

        // return heap[this.k - 1]
    }
}

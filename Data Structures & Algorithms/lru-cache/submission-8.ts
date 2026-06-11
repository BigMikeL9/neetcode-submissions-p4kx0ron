class TreeNode {
    key: number | null
    val: number | null
    next: TreeNode | null
    prev: TreeNode | null

    constructor(key: number, val: number) {
        this.key = key;
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class LRUCache {
    capacity: number;
    hashMap: Map<number, TreeNode>;
    leftDummy: TreeNode;
    rightDummy: TreeNode;

    /**
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.capacity = capacity;
        this.hashMap = new Map();
        this.leftDummy = new TreeNode(null, null);
        this.rightDummy = new TreeNode(null, null);

        this.leftDummy.next = this.rightDummy;
        this.rightDummy.prev = this.leftDummy;
    }

    removeNode(node: TreeNode) {
        const prevNode = node.prev;
        const nextNode = node.next;

        prevNode.next = nextNode;
        nextNode.prev = prevNode;
    }

    addNode(node: TreeNode) {
        const lastNode = this.rightDummy.prev;

        lastNode.next = node;
        this.rightDummy.prev = node
        node.next = this.rightDummy;
        node.prev = lastNode;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    // [1] -> 
    get(key: number): number {
        if (this.hashMap.has(key)) {
            // remove the node from the linked list
            // and re-add it at the end
            const node = this.hashMap.get(key);

            // [leftDummy] ->  -> [lastNode] -> [node] ->  [rightDummy]
            //             <-        <-      <-        <-
            this.removeNode(node);
            this.addNode(node);
            return node.val;
        } else {
            return -1;
        }
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        if (this.hashMap.has(key)) {
            const node = this.hashMap.get(key);
            node.val = value;

            // update usage
            this.removeNode(node);
            this.addNode(node)
        } else {
            if (this.capacity === this.hashMap.size) {
                // remove least used node
                const leastUsedNode = this.leftDummy.next;
                this.removeNode(leastUsedNode);
                this.hashMap.delete(leastUsedNode.key)
            }

            // and add new node
            const node = new TreeNode(key, value);
            this.addNode(node);
            this.hashMap.set(key, node)
        }
    }
}

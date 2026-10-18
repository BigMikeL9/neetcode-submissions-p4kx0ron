class Node:
    def __init__(self, key, val = 0):
        self.key, self.val = key, val
        self.prev, self.next = None, None

class LRUCache:

    def __init__(self, capacity: int):
        self.capacity = capacity
        self.cache = {} # {node_key: pointer_to_node}

        # left pointer -> LRU node
        # right pointer -> most recently used Node
        self.left = Node('left')
        self.right = Node('right')

        # point left and right to one another (double linked list)
        self.left.next, self.right.prev = self.right, self.left

    def remove(self, node: Node):
        nxt, prev = node.next, node.prev
        nxt.prev = node.prev
        prev.next = node.next
        self.cache.pop(node.key)

    def insert(self, node: Node):
        right, prev = self.right, self.right.prev
        right.prev = prev.next = node
        node.next, node.prev = right, prev
        self.cache[node.key] = node

    def get(self, key: int) -> int:
        if key in self.cache:
            # update lru
            node = self.cache[key]
            self.remove(node)
            self.insert(Node(key, node.val))
            return self.cache[key].val
        else:
            return -1
        

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            node = self.cache[key]
            self.remove(node)
        
        self.insert(Node(key, value))

        if len(self.cache) > self.capacity:
            lru = self.left.next
            self.remove(lru)
        







        

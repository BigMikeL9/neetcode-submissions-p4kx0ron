class MinStack:

    def __init__(self):
        # [(val, min_val_so_far)]
        self.stack = []
        
    # Time: O(1)
    def push(self, val: int) -> None:
        if len(self.stack) > 0:
            self.stack.append((val, min(val, self.stack[-1][1])))
        else:
            self.stack.append((val, val))

    # Time: O(1)
    def pop(self) -> None:
        self.stack.pop()

    # Time: O(1)
    def top(self) -> int:
        return self.stack[-1][0]

    # Time: O(1)
    def getMin(self) -> int:
        return self.stack[-1][1]
        
    
    # Space: O(n) for the stack
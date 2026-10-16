class Solution:
    def isValid(self, s: str) -> bool:
        if len(s) == 1:
            return False

        hashmap = { "}": "{", "]": "[", ")": "("}
        stack = []

        for c in s:
            if c in hashmap:
                print(stack, c, hashmap[c])
                if len(stack) <= 0 or stack.pop() != hashmap[c]:
                    return False
            else:
                stack.append(c)
        
        return False if len(stack) != 0 else True
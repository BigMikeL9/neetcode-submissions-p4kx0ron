class Solution:
    def calculate(self, s: str) -> int:
        stack = []
        num = 0 # used to track digits
        op = '+' # used to keep track of the last operator, while we're on a char or last char
        s = s.replace(' ', '')

        # "3+2*2" -> num = 2; op = '+' -> '*' num = 0; op = '*' -> '2' nums = 2; op = '*'
        for i, c in enumerate(s):
            if c.isdigit():
                # multi digit integers
                num = num * 10 + int(c)

            if (not c.isdigit()) or i == len(s) - 1:
                if op == '+':
                    stack.append(num)
                
                if op == '-':
                    stack.append(-num)

                if op == '*':
                    stack.append(stack.pop() * num)

                if op == '/':
                    print(c)
                    stack.append(int(stack.pop() / num))
                
                num = 0
                op = c
        
        return sum(stack)
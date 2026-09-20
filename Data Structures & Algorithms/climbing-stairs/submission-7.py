class Solution:
    def climbStairs(self, n: int) -> int:
        one, two = 1, 1

        print(range(n - 1), range(n + 1))

        for i in range(n - 1):
            tmp = one
            one = one + two
            two = tmp
            print(one, two)

        return one
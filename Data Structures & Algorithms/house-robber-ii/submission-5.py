class Solution:
    def rob(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return nums[0]

        def max_rob(houses):
            print(houses)
            if not len(houses):
                return 0

            if len(houses) == 1:
                return houses[0]
                
            houses[1] = max(houses[0], houses[1])

            for i in range(2, len(houses)):
                max_profit = max(houses[i] + houses[i - 2], houses[i - 1])
                houses[i] = max_profit

            return houses[-1]

        # max(robbed houses exluding last, robbed money excluding first house)
        exclude_first = max_rob(nums[1:])
        exclude_last = max_rob(nums[:len(nums) - 1])
        return max(exclude_first, exclude_last)

        # Time: O(n) + O(n) -> O(n)
        # Space: O(n) since we're creating copies of nums

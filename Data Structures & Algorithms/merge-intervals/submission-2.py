class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        # sort intervals by start time
        intervals.sort(key=lambda x: x[0])

        merged_intervals = [intervals[0]]

        # iterate through the intervals 
        # check if the end of interval i is <= i + 1
        for i in range(1, len(intervals)):
            last = merged_intervals[-1]
            curr = intervals[i]
            # [1, 4] [2, 3]
            if last[1] >= curr[0]:
                merged_intervals[-1] = [last[0], max(last[1], curr[1])]
            else:
                merged_intervals.append(curr)
        
        return merged_intervals

    # Time: O(n + nlogn) -> O(nlogn)
    # Space: O(1) since we sort the intervals arr in place without allocating extra memory
    # where n is the number of intervals
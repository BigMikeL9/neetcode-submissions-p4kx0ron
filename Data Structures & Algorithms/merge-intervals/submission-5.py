class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort(key=lambda x: x[0])
        merged_intervals = [intervals[0]]

        for i in range(1, len(intervals), 1):
            start_1, end_1 = merged_intervals[-1]
            start_2, end_2 = intervals[i]

            if end_1 >= start_2:
                merged_intervals.pop()
                merged_intervals.append([start_1, end_2 if end_2 > end_1 else end_1])
            else:
                merged_intervals.append(intervals[i])

        return merged_intervals




"""
Definition of Interval:
class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end
"""

class Solution:
    def canAttendMeetings(self, intervals: List[Interval]) -> bool:
        if not intervals:
            return True
            
        intervals.sort(key=lambda x: x.start)
        overlapping_intervals = [intervals[0]]

        for i in range(1, len(intervals), 1):
            i1 = overlapping_intervals[-1]
            i2 = intervals[i]

            if i1.end > i2.start:
                return False
            else:
                overlapping_intervals.append(intervals[i])

        return True

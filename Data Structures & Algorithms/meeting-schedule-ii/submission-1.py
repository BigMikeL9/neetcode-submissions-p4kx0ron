"""
Definition of Interval:
class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end
"""

class Solution:
    def minMeetingRooms(self, intervals: List[Interval]) -> int:
        intervals.sort(key=lambda x: x.start)
        min_heap = []

        # if meeting_end_1 < meeting_start_1 -> two meeting rooms
        for i in range(len(intervals)):
            if min_heap and min_heap[0] <= intervals[i].start:
                # can use same meeting room
                heapq.heappop(min_heap)
            
            heapq.heappush(min_heap, intervals[i].end)

        return len(min_heap)

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode(0, None)
        tail = dummy

        curr_1 = list1
        curr_2 = list2

        while curr_1 and curr_2:
            if curr_1.val < curr_2.val:
                tail.next = curr_1
                curr_1 = curr_1.next
            else:
                tail.next = curr_2
                curr_2 = curr_2.next
            
            tail = tail.next

        # if one list still has nodes, add it to output list
        if curr_1:
            tail.next = curr_1
        elif curr_2:
            tail.next = curr_2

        return dummy.next

        # Time: O(n + m)
        # Space: O(1) excluding the output
        # where n is the number of nodes in list 1 and m in list2


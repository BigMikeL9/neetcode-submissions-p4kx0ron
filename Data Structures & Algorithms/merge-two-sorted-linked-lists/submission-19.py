# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode()

        curr = dummy
        curr_list1 = list1
        curr_list2 = list2

        while curr_list1 and curr_list2:
            if curr_list1.val < curr_list2.val:
                curr.next = curr_list1
                curr_list1 = curr_list1.next
            else: 
                curr.next = curr_list2
                curr_list2 = curr_list2.next

            curr = curr.next

        if curr_list1:
            curr.next = curr_list1
        else:
            curr.next = curr_list2

        return dummy.next

            
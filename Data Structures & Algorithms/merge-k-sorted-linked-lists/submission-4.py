# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:    
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        if not lists or len(lists) == 0:
            return None
        
        # merge two linked lists at a time
        while len(lists) != 1:
            merged_lists = []
            list_1 = lists.pop()
            list_2 = lists.pop()

            merged_lists = self.merge_linked_lists(list_1, list_2)
            lists.append(merged_lists)

        return lists[0]

    def merge_linked_lists(self, list1, list2):
        dummy = ListNode()
        curr = dummy

        while list1 and list2:
            if list1.val < list2.val:
                curr.next = ListNode(list1.val)
                list1 = list1.next
            else:
                curr.next = ListNode(list2.val)
                list2 = list2.next
            
            curr = curr.next
        
        if list1:
            curr.next = list1
        elif list2:
            curr.next = list2

        return dummy.next

    # Time: merging_linked_lists: O(n). merge_k_lists: O(k) -> O(k + n)
    # Space: merging_linked_lists: O(1). merge_k_lists: O(1) updating lists in place
    # Time: O(k + n)
    # Space: O(1)
            







        

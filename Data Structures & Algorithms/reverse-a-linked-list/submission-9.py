# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        nodes = []
        dummy = ListNode()

        curr = head
        while curr:
            nodes.append(curr)
            curr = curr.next

        curr = dummy
        print(dummy.next)
        for i in range(len(nodes) - 1, -1, -1):
            curr.next = nodes[i]
            curr = curr.next
        curr.next = None

        return dummy.next


        
'''
Time complexity O(n)
Space complexity O(1)
'''

class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        left_ptr = None
        right_ptr = head
        
        while right_ptr != None:
            old_right_ptr = right_ptr.next
            right_ptr.next = left_ptr
            left_ptr = right_ptr
            right_ptr = old_right_ptr
        
        return left_ptr
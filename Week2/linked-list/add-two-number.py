# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        l1_ptr = l1
        l2_ptr = l2
        
        carry = 0
        
        dummy = ListNode(0)
        dummy_ptr = dummy
        
        while l1_ptr != None or l2_ptr != None:
            l1_val = l1_ptr.val if l1_ptr != None else 0
            l2_val = l2_ptr.val if l2_ptr != None else 0
            
            val_sum = l1_val + l2_val + carry
            carry = val_sum//10
            new_node_val = val_sum%10
            
            dummy_ptr.next = ListNode(new_node_val)
            
            dummy_ptr = dummy_ptr.next
            l1_ptr = l1_ptr.next if l1_ptr != None else None
            l2_ptr = l2_ptr.next if l2_ptr != None else None
            
        if carry > 0:
            dummy_ptr.next = ListNode(carry)
            
            
        return dummy.next
        
            
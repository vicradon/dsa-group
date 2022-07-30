"""
# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random
"""

'''
Time complexity O(2n) where n is the length of the list
Space complexity O(n) 
'''

class Solution:
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':
        if head == None:
            return None
        
        copied_list = Node(head.val)
        
        node_mapping = {head:copied_list}
        
        current = head
        current_copy = copied_list
        
        
        while current != None:
            next_copied_node = Node(current.next.val) if current.next != None else None
            
            node_mapping[current.next] = next_copied_node
            current_copy.next = next_copied_node
            current = current.next
            current_copy = current_copy.next 
           
        current = head
        current_copy = copied_list
        
        
        while current != None:
            new_node_random_reference = node_mapping[current.random]
            current_copy.random = new_node_random_reference
            current_copy = current_copy.next
            current = current.next
            
        return copied_list
            
        
        
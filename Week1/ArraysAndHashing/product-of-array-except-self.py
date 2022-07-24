"""
Time complexity O(3n)
Space complexity O(3n)
"""

from collections import deque

class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        result = []
        prefix = []
        suffix = deque()
        
        for i in range(len(nums)):
            if not(prefix):
                prefix.append(1)
            else:
                prefix.append(prefix[-1] * nums[i-1])
                
        for i in range(len(nums)-1, -1, -1):
            if not(suffix):
                suffix.appendleft(1)
            else:
                suffix.appendleft(suffix[0] * nums[i+1])
  
        for i in range(len(nums)): 
            result.append(prefix[i] * suffix[i])
            
        return result

"""
Time complexity: O(n)
Space complexity: O(n) - due to presence of hashset
"""

class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        uniqueItems = set()
        
        for num in nums:
            if num in uniqueItems:
                return True
            else:
                uniqueItems.add(num)
                
        return False
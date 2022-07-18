"""
Time complexity O(n)
Space complexity O(1)
"""
class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        l, r = 0, len(numbers) - 1
        
        while l - r < 0:
            if numbers[l] + numbers[r] == target:
                return l+1, r+1
            
            if numbers[l] + numbers[r] > target:
                r -= 1
            elif numbers[l] + numbers[r] < target:
                l += 1
                
        
        
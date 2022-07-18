"""
Time complexity O(n)
Space complexity O(1)
"""
class Solution:
    def maxArea(self, height: List[int]) -> int:
        l, r = 0, len(height) - 1
        maximumArea = float("-inf")
        
        while r - l > 0:
            distance = r - l
            shorterBar = min(height[l], height[r])
            
            if shorterBar * distance > maximumArea:
                maximumArea = shorterBar * distance
            
            if height[l] > height[r]:
                r -= 1
            else:
                l += 1
                
        return maximumArea
            
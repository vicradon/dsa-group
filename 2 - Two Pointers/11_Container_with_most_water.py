from typing import List

class Solution:
    def maxArea(self, height: List[int]) -> int:
        '''
        max = 1 * 8 = 8
        max = 7 * 7 = 49 , 18, 40, 24, 6, 10, 4
        
        
        [1,8,6,2,5,4,8,3,7]
                   l r
                
        maxWater = float('-inf')
        
        for i in range(len(height)):
            for j in range(i + 1, len(height)):
                distance = j - 1
                minHeight = min(height[i], height[j])
                maxWater = max(maxWater, distance * minHeight)
                
        return maxWater
        '''
        l = 0
        r = len(height) - 1
        maxVolume = float('-inf')
        while r - l > 0:
            minHeight = min(height[r], height[l])
            distance = r - l
            maxVolume = max(maxVolume, minHeight * distance)
            if (height[r] < height[l]):
                r-=1
            else:
                l+=1
                
        return maxVolume
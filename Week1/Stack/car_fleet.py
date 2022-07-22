"""
Time complexity O(n^2)
Space complexity O(2n)
"""
class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        stack = []      
        position_time = []
        
        for i in range(len(position)):
            position_time.append((position[i], (target-position[i])/speed[i]))
        position_time.sort()
        
        for i in range(len(position_time)):
            while stack and position_time[i][1] >= stack[-1][1]:
                stack.pop()
            stack.append(position_time[i])
            
        return len(stack)
        
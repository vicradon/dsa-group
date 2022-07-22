"""
Time complexity O(n^2)
Space complexity O(2n)
"""
class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        stack = [] 
        result = [0] * len(temperatures)
        
        for i in range(len(temperatures)):
            while stack and stack[-1][1] < temperatures[i]:
                j, temp = stack.pop()
                result[j] = i - j
            stack.append((i, temperatures[i]))
        return result
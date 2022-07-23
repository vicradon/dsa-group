class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        """
        # Naive solution
        
        maxArea = 0
        
        for i in range(len(heights)):
            for j in range(i+1, len(heights)):
                if heights[i] > heights[j]:
                    maxArea = max(maxArea, heights[i] * (j-i))
                    break
                if j == len(heights) - 1:
                    maxArea = max(maxArea, heights[i] * len(heights) - i)
                    
            if i == len(heights) - 1:
                maxArea = max(maxArea, heights[i])
            
        
        return maxArea
        """
        
        # Efficient solution
        maxArea = 0
        stack = [] # height, index
        
        for i in range(len(heights)):
            start = i
            while stack and stack[-1][0] > heights[i]:
                height, index = stack.pop()
                maxArea = max(maxArea, height * (i-index))
                start = index
                
            stack.append((heights[i], start))
            
        for i in range(len(stack)):
            maxArea = max(maxArea, stack[i][0] * (len(heights) - stack[i][1]))
            
        return maxArea
            
            
                
            
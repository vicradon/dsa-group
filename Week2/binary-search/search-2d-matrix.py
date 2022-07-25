class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        l, r = 0, len(matrix) - 1
        
        while r >= l:
            mid_point = (l+r)//2
            
            if matrix[mid_point][0] <= target and matrix[mid_point][-1] >= target:
                left, right = 0, len(matrix[mid_point]) - 1
                
                while right >= left:
                    middle = (left+right)//2
                    if matrix[mid_point][middle] == target:
                        return True
                    elif matrix[mid_point][middle] < target:
                        left = middle + 1
                    elif matrix[mid_point][middle] > target:
                        right = middle - 1
                        
                return False
                    
            elif matrix[mid_point][-1] < target:
                l = mid_point + 1
            elif matrix[mid_point][0] > target:
                r = mid_point - 1
        
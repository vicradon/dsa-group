from typing import List

class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        l = 0
        r = len(numbers) - 1
        
        while r > l:
            two_sum = numbers[l] + numbers[r]
            
            if (two_sum > target):
                r -= 1
            elif (two_sum < target):
                l += 1
            else:
                return [l + 1, r + 1]
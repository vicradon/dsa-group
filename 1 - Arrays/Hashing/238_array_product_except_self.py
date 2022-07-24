from typing import List

class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        #O(N) Space and time
        left_product = [1]*len(nums)
        right_product = [1]*len(nums)
        result = []
        for i in range(1, len(nums)):
            left_product[i] = left_product[i - 1] * nums[i - 1]
        
        for i in range(len(nums) - 2, -1, -1):
            right_product[i] = right_product[i + 1] * nums[i + 1]

        for i in range(len(nums)):
            result.append(left_product[i] * right_product[i])
            
        return result

    def productExceptSelf(self, nums: List[int]) -> List[int]:
        # O(1) Space ; O(N) Time
        result = [1]*len(nums)
        right_product = 1
        for i in range(1, len(nums)):
            result[i] = result[i - 1] * nums[i - 1]
        
        for i in range(len(nums) - 1, -1, -1):
            result[i] = result[i] * right_product
            right_product *= nums[i]
            
        return result
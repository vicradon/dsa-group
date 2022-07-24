from typing import List

class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        start_nums = set()
        
        nums_in_array = set(nums)
        
        longest_sequence = 0
        
        for num in nums_in_array:
            if (num - 1 not in nums_in_array):
                start_nums.add(num)
                
        for num in start_nums:
            current = num
            count = 0
            while current in nums_in_array:
                count+=1
                current+=1
            longest_sequence = max(count, longest_sequence)
        
        return longest_sequence
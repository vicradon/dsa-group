class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        number_set = set(nums)
        longest_sequence_length = 0
        
        for num in nums:
            if not(num - 1 in number_set):
                current_sequence_length = 1

                while num + current_sequence_length in number_set:
                    current_sequence_length += 1

                longest_sequence_length = max(longest_sequence_length, current_sequence_length)
            
        return longest_sequence_length
    
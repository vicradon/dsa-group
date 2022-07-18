from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        freq = {}
        
        for i in range(len(nums)):
            rem = target - nums[i]
            if rem in freq:
                return [freq[rem], i]
            else:
                freq[nums[i]] = i

s = Solution()
res = s.twoSum([7, 2, 8, 4, 5, 1], 9)
print(res)

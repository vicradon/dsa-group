from typing import List

class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        result = set()
        for i in range(len(nums) - 2):
            l = i+1
            r = len(nums) - 1
            target = -nums[i]
            while r > l:
                twoSum = nums[r] + nums[l]
                if (twoSum > target):
                    r-=1
                elif(twoSum < target):
                    l+=1
                else:
                    result.add((nums[i], nums[l], nums[r]))
                    l+=1
                    r-=1
        return result
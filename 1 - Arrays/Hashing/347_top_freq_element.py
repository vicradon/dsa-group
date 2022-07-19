from typing import List

class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        '''
        Brute Force 0(NogN)
        freq = {}
        for num in nums:
            freq[num] = freq.get(num, 0) + 1
        freq = {k: v for k, v in sorted(freq.items(), key=lambda item: item[1], reverse=True)}
        i = k
        res = []
        for key in freq:
            if i <= 0:
                break
            res.append(key)
            i-=1
        return res
        '''
        freq = {}
        
        for num in nums:
            freq[num] = freq.get(num, 0) + 1
            
        count = [[] for _ in range(len(nums) + 1)]
        
        for num in freq:
            count[freq[num]].append(num)
        
        res = []
        i = len(nums)
        while len(res) < k:
            res = [*res, *count[i]]
            i-=1
        return res
            
        
class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        l, r = 1, max(piles)
        min_time = float('inf')
        
        while r >= l:
            time_at_speed = 0
            mid = (l+r)//2
            
            for bananas in piles:
                time_at_speed += math.ceil(bananas/mid)
            
            if time_at_speed <= h:
                r = mid - 1
                min_time = mid
            else:
                l = mid + 1
                
        return min_time
            
        

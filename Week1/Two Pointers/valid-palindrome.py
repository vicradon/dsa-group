"""
Time complexity O(n)
Space complexity O(n)
"""

class Solution:
    def isPalindrome(self, s: str) -> bool:
        alpha_numeric = set("abcdefghijklmnopqrstuvwxyz0123456789")
        s_pure = "".join([char for char in s.lower() if char in alpha_numeric])
        
        l, r = 0, len(s_pure) - 1
        
        while r > l:
            if s_pure[r] == s_pure[l]:
                l += 1
                r -= 1
            else:
                return False
            
        return True
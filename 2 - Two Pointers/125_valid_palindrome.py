class Solution:
    def isPalindrome(self, s: str) -> bool:
        l = 0
        r = len(s) - 1
        
        while r > l:
            if not s[r].isalpha() and not s[r].isdigit():
                r-=1
            elif not s[l].isalpha() and not s[l].isdigit():
                l+=1
            elif s[r].lower() == s[l].lower() :
                r-=1
                l+=1
            else:
                return False
            
        return True
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        # No extra space: Time complexity - O(nLog(n)), space complexity - O(1)
        # return sorted(s) == sorted(t)
    
    
        # Extra space: Time complexity - O(2n), space complexity - O(2n)
        if len(s) != len(t):
            return False
    
        hashS, hashT = dict(), dict()
        
        for i in range(len(s)):
            if s[i] in hashS:
                hashS[s[i]] = hashS[s[i]] + 1
            else:
                hashS[s[i]] = 1
                
            if t[i] in hashT:
                hashT[t[i]] = hashT[t[i]] + 1
            else:
                hashT[t[i]] = 1
                
        for char in hashS.keys():
            if char in hashS and not(char in hashT):
                return False
            else:
                if hashS[char] != hashT[char]:
                    return False
            
        return True
                
        
            
        

        
        
        
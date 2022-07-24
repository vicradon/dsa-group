class Solution:
    def isValid(self, s: str) -> bool:
        char_set = {
            "(": ")",
            "{": "}",
            "[": "]",
        }
    
        stack = []
        
        for char in s:
            if char == "{" or char == "(" or char == "[":
                stack.append(char)
            else:
                if stack:
                    top_char = stack.pop()
                    if char != char_set[top_char]:
                        return False
                else:
                    return False
        
        if len(stack) == 0:
            return True
        
        return False
                
                
        
        
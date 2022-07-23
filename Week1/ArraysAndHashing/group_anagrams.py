class Solution:    
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:      
        anagramGroups = dict()
        
        for word in strs:
            groupedLetters = "".join(sorted(word))
            
            if groupedLetters in anagramGroups:
                anagramGroups[groupedLetters].append(word)
            else:
                anagramGroups[groupedLetters] = [word]
                
        return anagramGroups.values()
        
        